import type { Swagger } from 'atlassian-openapi'
import { describe, expect, it } from 'vitest'
import { mergeOpenAPISpecs } from '../../src/utils/openapi'

describe('mergeOpenAPISpecs', () => {
  it('should merge multiple OpenAPI specs with correct title and version', () => {
    const spec1: Swagger.SwaggerV3 = {
      openapi: '3.1.0',
      info: { title: 'Spec 1', version: '1.0.0' },
      paths: {
        '/test1': {
          get: {
            tags: ['Tag1'],
            responses: { '200': { description: 'OK' } },
          },
        },
      },
    }

    const spec2: Swagger.SwaggerV3 = {
      openapi: '3.1.0',
      info: { title: 'Spec 2', version: '1.0.0' },
      paths: {
        '/test2': {
          post: {
            tags: ['Tag2'],
            responses: { '200': { description: 'OK' } },
          },
        },
      },
    }

    const merged = mergeOpenAPISpecs({
      title: 'Merged API',
      version: '1.0.0',
      specs: [{ spec: spec1 }, { spec: spec2, pathPrefix: '/api' }],
    })

    expect(merged.info.title).toBe('Merged API')
    expect(merged.info.version).toBe('1.0.0')
    expect(merged.paths).toHaveProperty('/test1')
    expect(merged.paths).toHaveProperty('/api/test2')
  })

  it('should apply tag transformations correctly', () => {
    const spec: Swagger.SwaggerV3 = {
      openapi: '3.1.0',
      info: { title: 'Test API', version: '1.0.0' },
      paths: {
        '/test': {
          get: {
            tags: ['TestTag'],
            responses: { '200': { description: 'OK' } },
          },
        },
      },
      tags: [{ name: 'TestTag', description: 'Test tag description' }],
    }

    const merged = mergeOpenAPISpecs({
      title: 'Transformed API',
      version: '1.0.0',
      specs: [
        {
          spec,
          transform: (name) => `Prefix_${name}`,
        },
      ],
    })

    // Check if the tag in the operation was transformed
    const pathOperation = merged.paths['/test'].get
    expect(pathOperation?.tags?.[0]).toBe('Prefix_TestTag')

    // Check if the tag in the tags array was transformed
    const transformedTag = merged.tags?.find(
      (tag) => tag.name === 'Prefix_TestTag',
    )
    expect(transformedTag).toBeDefined()
    expect(transformedTag?.description).toBe('Test tag description')
  })

  it('should merge component schemas from multiple specs', () => {
    const spec1: Swagger.SwaggerV3 = {
      openapi: '3.1.0',
      info: { title: 'Spec 1', version: '1.0.0' },
      paths: {
        '/test1': {
          get: {
            tags: ['Tag1'],
            responses: { '200': { description: 'OK' } },
          },
        },
      },
      components: {
        schemas: {
          Schema1: {
            type: 'object',
            properties: { prop1: { type: 'string' } },
          },
        },
      },
    }

    const spec2: Swagger.SwaggerV3 = {
      openapi: '3.1.0',
      info: { title: 'Spec 2', version: '1.0.0' },
      paths: {
        '/test2': {
          get: {
            tags: ['Tag2'],
            responses: { '200': { description: 'OK' } },
          },
        },
      },
      components: {
        schemas: {
          Schema2: {
            type: 'object',
            properties: { prop2: { type: 'number' } },
          },
        },
      },
    }

    const merged = mergeOpenAPISpecs({
      title: 'Merged API',
      version: '1.0.0',
      specs: [{ spec: spec1 }, { spec: spec2 }],
    })

    expect(merged.components?.schemas).toHaveProperty('Schema1')
    expect(merged.components?.schemas).toHaveProperty('Schema2')
    expect(merged.components?.schemas?.Schema1?.properties).toHaveProperty(
      'prop1',
    )
    expect(merged.components?.schemas?.Schema2?.properties).toHaveProperty(
      'prop2',
    )
  })
})
