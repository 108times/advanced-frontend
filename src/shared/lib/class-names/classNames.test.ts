import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with condition', () => {
    expect(classNames('someClass', true && 'true')).toBe('someClass true')
  })

  test('with false condition', () => {
    expect(classNames('someClass', false && 'false')).toBe('someClass')
  })

  test('with mods', () => {
    expect(
      classNames('someClass', {
        hovered: true,
        scrollable: true,
      })
    ).toBe('someClass hovered scrollable')
  })

  test('with mods false', () => {
    expect(
      classNames('someClass', {
        hovered: true,
        scrollable: false,
      })
    ).toBe('someClass hovered')
  })

  test('with mods undefined', () => {
    expect(
      classNames('someClass', {
        hovered: undefined,
        scrollable: true,
      })
    ).toBe('someClass scrollable')
  })
})
