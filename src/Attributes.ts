import Model from './Model'

export enum Type {
  Attr = 'Attr',
  Date = 'Date',
  HasOne = 'HasOne',
  BelongsTo = 'BelongsTo',
  HasMany = 'HasMany',
  HasManyBy = 'HasManyBy'
}

export type Types = Attr | Date | HasOne | BelongsTo | HasMany | HasManyBy

export interface Attr {
  type: Type.Attr
  value: any
}

export interface Date {
  type: Type.Date
  value: any
}

export interface HasOne {
  type: Type.HasOne
  model: typeof Model | string
  foreignKey: string
  value: any
}

export interface BelongsTo {
  type: Type.BelongsTo
  model: typeof Model | string
  foreignKey: string
  value: any
}

export interface HasMany {
  type: Type.HasMany
  model: typeof Model | string
  foreignKey: string
  value: any
}

export interface HasManyBy {
  type: Type.HasManyBy
  model: typeof Model | string
  foreignKey: string
  otherKey: string
  value: any
}

export default class Attributes {
  /**
   * The generic attribute. The given value will be used as default value
   * of the property when instantiating a model.
   */
  static attr (value: any): Attr {
    return { type: Type.Attr, value }
  }

  /**
   * The date attribute. This attribute will be converted to moment instance.
   */
  static date (value: any): Date {
    return { type: Type.Date, value }
  }

  /**
   * The has one relationship.
   */
  static hasOne (model: typeof Model | string, foreignKey: string): HasOne {
    return { type: Type.HasOne, model, foreignKey, value: null }
  }

  /**
   * The belongs to relationship.
   */
  static belongsTo (model: typeof Model | string, foreignKey: string): BelongsTo {
    return { type: Type.BelongsTo, model, foreignKey, value: null }
  }

  /**
   * The has many relationship.
   */
  static hasMany (model: typeof Model | string, foreignKey: string): HasMany {
    return { type: Type.HasMany, model, foreignKey, value: null }
  }

  /**
   * The has many by relationship.
   */
  static hasManyBy (model: typeof Model | string, foreignKey: string, otherKey: string = 'id'): HasManyBy {
    return { type: Type.HasManyBy, model, foreignKey, otherKey, value: null }
  }

  /**
   * Determin if the given attribute is the type of relationship.
   */
  static isRelation (attr: Types): boolean {
    return attr.type !== Type.Attr && attr.type !== Type.Date
  }
}
