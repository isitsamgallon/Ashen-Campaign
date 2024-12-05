Admin homepage that contains information and quick links to various pages throughout the vault for easy access. If you're on the Web Vault then you can safely ignore this page :)

=== multi-column-start: ID_xo 97
```column-settings
Number of Columns: 2
Largest Column: standard
border: off
shadow: off
```

### Missing Info Links
- [[INFORMATION MISSING OR OUT-OF-DATE]]
- [[TOM MISSING INFORMATION]]

=== end-column ===
### Useful Notes
-  [[Spell Links]]
- [[The Party's To-Do List]]
- Templates:
	- [[New Session]]
	- [[New NPC]]
	- [[New Nation]]

====== multi-column-end

## Recent Notes
=== multi-column-start: ID_xo 96
```column-settings
Number of Columns: 2
Largest Column: standard
border: off
shadow: off
```

### Recently Modified 
```dataview
list
from ""
sort file.mtime DESC
limit 5

```
=== end-column ===
### Recently Created Notes
```dataview
list
from ""
sort file.ctime DESC
limit 5

```

====== multi-column-end
### Current Party
```dataview
TABLE class as "Class", role as "Role", type as "Status"
WHERE type = "In The Party"
SORT number(split(file.name, "\.")[0]) ASC
```

### All Group Members
```dataview
TABLE class as "Class", role as "Role", type as "Status"
WHERE type = "Travelling" or type = "Dead" or type = "In The Party" or type = "Left"
```

### Sessions

```button
name New Session
type note(Session) template
action New Session
templater true
folder Session Notes
prompt false
```

```dataview
TABLE part as "Part", Summary
From "Session Notes"
SORT number(split(file.name, "\.")[0]) DESC
```
