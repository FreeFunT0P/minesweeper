import Vue from 'vue'
import App from './App.vue'
// import {router} from './router'
import {store} from './store'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Alert,
  Aside,
  Autocomplete,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  Container,
  DatePicker,
  Dialog,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Footer,
  Form,
  FormItem,
  Header,
  Image,
  Input,
  InputNumber,
  Link,
  Loading,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  MessageBox,
  Notification,
  Option,
  OptionGroup,
  Pagination,
  Popconfirm,
  Popover,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Row,
  Select,
  Slider,
  Step,
  Steps,
  Submenu,
  Switch,
  Table,
  TableColumn,
  TabPane,
  Tabs,
  Tag,
  Timeline,
  TimelineItem,
  TimePicker,
  Tooltip,
  Transfer,
  Tree
} from 'element-ui'

Vue.component(Submenu.name, Submenu)
Vue.component(Autocomplete.name, Autocomplete)
Vue.component(Header.name, Header)
Vue.component(Select.name, Select)
Vue.component(OptionGroup.name, OptionGroup)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Switch.name, Switch)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Tag.name, Tag)
Vue.component(Option.name, Option)
Vue.component(Slider.name, Slider)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Transfer.name, Transfer)
Vue.component(Card.name, Card)
Vue.component(Rate.name, Rate)
Vue.component(MessageBox.name, MessageBox)
Vue.component(Popover.name, Popover)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Dialog.name, Dialog)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Alert.name, Alert)
Vue.component(Tree.name, Tree)
Vue.component(Main.name, Main)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(RadioButton.name, RadioButton)
Vue.component(Container.name, Container)
Vue.component(Footer.name, Footer)
Vue.component(Aside.name, Aside)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(CheckboxButton.name, CheckboxButton)
Vue.component(Step.name, Step)
Vue.component(Steps.name, Steps)
Vue.component(Checkbox.name, Checkbox)
Vue.component(InputNumber.name, InputNumber)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Timeline.name, Timeline)
Vue.component(TimelineItem.name, TimelineItem)
Vue.component(TimePicker.name, TimePicker)
Vue.component(Image.name, Image)
Vue.component(Drawer.name, Drawer)
Vue.component(Collapse.name, Collapse)
Vue.component(CollapseItem.name, CollapseItem)
Vue.component(Popconfirm.name, Popconfirm)
Vue.component(Link.name, Link)

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App),
}).$mount('#app')
