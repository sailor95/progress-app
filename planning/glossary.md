# Glossary

Separate by UI & Functional.

## UI

- `Quick Bar`: Consist of several Quick Buttons
  - `Quick Buttons`: Customizable buttons for user to add progress quickly
- `Progress Bar`: Consist of weekly/monthly view of progress records, divided by category
  - `Progress Cube`: Each category of progress is consist of many progress cubes (1 progress cube stand for 1 progress record added, it's the UI representation of record)
- `Today's Progress`: Consist of today's progress record, user can do CRUD operation to today's progress record in this area. User can also edit progress description detail and photos here in the future version.

## Functional

- `Mission`: Mission is the interface of each Progress Record, it also consist the display information needed by `QuickBar`'s `Quick Button`
- `Progress Record`: Base data structure of a progress
- (Deprecated: Absorbed by `Mission`) ~~`Quick Button Config`: Config of a `Quick Button`~~
