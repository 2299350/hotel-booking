## Room entity

`Room` is the main entity that describes a hotel room available for booking.

### Fields

| Field           | Type               | Description                                   |
| --------------- | ------------------ | --------------------------------------------- |
| `id`            | `string`           | Unique room identifier                        |
| `name`          | `string`           | Room name displayed in the UI                 |
| `propertyType`  | `string`           | Room category from a predefined list          |
| `pricePerNight` | `number`           | Price per night                               |
| `beds`          | `array of objects` | List of beds with type and quantity           |
| `view`          | `string`           | View type from a predefined list              |
| `description`   | `string`           | Full room description                         |
| `images`        | `array of strings` | List of image URLs or image paths             |
| `amenities`     | `array of strings` | List of room amenities from a predefined list |
| `capacity`      | `object`           | Room capacity for adults and children         |

---

### Allowed values

#### `propertyType`

- `standard`
- `deluxe`
- `suite`
- `family`
- `studio`

#### `beds[].type`

- `king`
- `queen`
- `double`
- `single`
- `sofa_bed`

#### `view`

- `sea`
- `garden`
- `city`
- `mountain`
- `pool`
- `courtyard`

#### `amenities`

- `wifi`
- `air_conditioning`
- `tv`
- `breakfast`
- `balcony`
- `mini_bar`
- `coffee_machine`
- `workspace`
- `parking`
- `pool_access`

---

### Field structure examples

#### `beds`

```js
[{ type: 'king', quantity: 1 }];
```
