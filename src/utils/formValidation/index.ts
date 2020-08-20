import * as yup from 'yup';

export function equalTo(this: yup.StringSchema, ref: any, msg: any) {
  return yup.string().test({
    name: 'equalTo',
    exclusive: false,
    message: msg || `${ref.path} must be the same as ${ref}`,
    params: {
      reference: ref.path,
    },
    test: function (value: any) {
      return value === this.resolve(ref);
    },
  });
}