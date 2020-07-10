import { ResourceKey } from 'i18next'

import { I18N_NS as demo } from '../../pages/_i18n'

/* Example:
  type Namespaces =
  | typeof module1
  | typeof module2
  | typeof module3
  | typeof module4
  | typeof module5
 */
type Namespaces = typeof demo
export type Spec = Record<Namespaces, ResourceKey>
