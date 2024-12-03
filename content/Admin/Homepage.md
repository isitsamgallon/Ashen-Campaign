Admin homepage that contains information and quick links to various pages throughout the vault for easy access. If you're on the Web Vault then you can safely ignore this page :)

### Links:
- [[INFORMATION MISSING OR OUT-OF-DATE]]
- [[TOM MISSING INFORMATION]]
- Templates:
	- [[New Session]]
	- [[New Note (Basic)]]
	- [[New Nation]]
- [[Spell Links]]
- [[The Party's To-Do List]]

### Current Party
```dataview
TABLE Class, Role
WHERE Type = "The Party"
SORT number(split(file.name, "\.")[0]) ASC
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
