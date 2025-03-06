import { Swagger } from 'atlassian-openapi'

/**
 * Merges one Swagger spec into another, applying optional path and tag prefixes.
 */
const mergeOneSpec = (
  base: Swagger.SwaggerV3,
  toMerge: Swagger.SwaggerV3,
  pathPrefix = '',
  transform?: (pathItem: string) => string,
): Swagger.SwaggerV3 => {
  base.paths = base.paths || {}

  for (const [path, pathItem] of Object.entries(toMerge.paths || {})) {
    const prefixedPath = `${pathPrefix}${path}`

    if (pathItem && typeof pathItem === 'object') {
      for (const [method, operation] of Object.entries(pathItem)) {
        if (operation && typeof operation === 'object') {
          if (Array.isArray(operation.tags)) {
            operation.tags = operation.tags.map((tagName: string) => {
              return transform ? transform(tagName) : tagName
            })
            // Sort tags alphabetically
            operation.tags.sort()
          }
        }
      }
    }

    base.paths[prefixedPath] = pathItem
  }

  base.tags = base.tags || []
  const newTags = (toMerge.tags || []).map((tag) => ({
    ...tag,
    name: transform ? transform(tag.name) : tag.name,
  }))
  base.tags.push(...newTags)
  // Sort tags alphabetically by name
  base.tags.sort((a, b) => a.name.localeCompare(b.name))

  // Initialize base components to ensure they exist
  base.components = base.components || {}
  base.components.schemas = base.components.schemas || {}
  base.components.responses = base.components.responses || {}
  base.components.parameters = base.components.parameters || {}
  base.components.securitySchemes = base.components.securitySchemes || {}

  // Ensure toMerge components exist so we can destructure
  toMerge.components = toMerge.components || {}
  toMerge.components.schemas = toMerge.components.schemas || {}
  toMerge.components.responses = toMerge.components.responses || {}
  toMerge.components.parameters = toMerge.components.parameters || {}
  toMerge.components.securitySchemes = toMerge.components.securitySchemes || {}

  // Merge component sections
  base.components.schemas = {
    ...base.components.schemas,
    ...toMerge.components.schemas,
  }
  base.components.responses = {
    ...base.components.responses,
    ...toMerge.components.responses,
  }
  base.components.parameters = {
    ...base.components.parameters,
    ...toMerge.components.parameters,
  }
  base.components.securitySchemes = {
    ...base.components.securitySchemes,
    ...toMerge.components.securitySchemes,
  }

  if (toMerge.servers) {
    base.servers = [...(base.servers || []), ...toMerge.servers]
  }

  if (toMerge.tags) {
    base.tags = [...(base.tags || []), ...toMerge.tags]
    // Sort tags alphabetically by name
    base.tags.sort((a, b) => a.name.localeCompare(b.name))
  }

  return base
}

export function mergeOpenAPISpecs(params: {
  title: string
  version: string
  specs: {
    spec: Swagger.SwaggerV3
    pathPrefix?: string
    transform?: (name: string) => string
  }[]
}): Swagger.SwaggerV3 {
  const { title, version, specs } = params

  let merged: Swagger.SwaggerV3 = {
    openapi: '3.1.0',
    info: {
      title,
      version,
    },
    paths: {},
    components: {
      schemas: {},
      responses: {},
      parameters: {},
      securitySchemes: {},
    },
    tags: [],
  }

  for (const {
    spec,
    pathPrefix = '',
    transform = (name: string) => name,
  } of specs) {
    merged = mergeOneSpec(merged, spec, pathPrefix, transform)
  }

  // Ensure tags are sorted alphabetically
  if (merged.tags) {
    merged.tags.sort((a, b) => a.name.localeCompare(b.name))
  }

  return merged
}
