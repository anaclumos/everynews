declare module 'atlassian-openapi' {
  export namespace Swagger {
    interface SwaggerV3 {
      openapi: string
      info: {
        title: string
        version: string
      }
      paths?: Record<string, any>
      components?: {
        schemas?: Record<string, any>
        responses?: Record<string, any>
        parameters?: Record<string, any>
        securitySchemes?: Record<string, any>
      }
      tags?: Tag[]
      servers?: Server[]
    }

    interface Tag {
      name: string
      description?: string
      externalDocs?: {
        description?: string
        url: string
      }
    }

    interface Server {
      url: string
      description?: string
      variables?: Record<string, ServerVariable>
    }

    interface ServerVariable {
      enum?: string[]
      default: string
      description?: string
    }
  }
}
