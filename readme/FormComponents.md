### Component - FormBlock

The application example - `<FormBlock />`

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `className` | not | string | The style can be passed to manage placing the component next to others in the section |

<hr>

### Component - CustomInput

The application example - `<CustomInput />`

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `label` | not | string | Can pass text displaying for a label |
| `errorMessage` | not | string | Can pass text displaying for a error message |
| `className` | not | string | styles can be passed for the component wrapper |
|  | not |  | any other attributes that are characteristic of the input (type, placeholder, etc) |

<hr>

### Component - CustomTextarea

The application example - `<CustomTextarea />`

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `label` | not | string | Can pass text displaying for a label |
| `className` | not | string | styles can be passed for the component wrapper |
|  | not |  | Any other attributes that are characteristic of the textarea (placeholder, rows, cols, etc) |

<hr>

### Component - CustomCheckbox

The application example - `<CustomCheckbox />`

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `checked` | yes | boolean | starting value for checked |
| `handleChange` | yes | function | The function to control the value into state in the parent component |
| `className` | not | string | styles can be passed for the component wrapper |
| `definition` | not | string | text for the checkbox |
|  | not |  | Any other attributes that are characteristic of the checkbox (checked, type, etc) |

#### The remark

To apply with React-Hook-Form using the library's component - `<Controller />`

<hr>
