import type { TArgs } from '.'
import List from '../../../configs/links/menu'

//TODO: rename file to conf
const args: TArgs = {
  ...List,
  label: {
    onsite: 'Onsite',
    preorder: 'Preorder',
  },
}
export default args