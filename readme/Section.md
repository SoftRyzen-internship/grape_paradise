### Section component

Reusable Section component for all sections on the project, include adaptive container

---

<table>
	<tr>
		<th>props</th>
        <th>type</th>
		<th>required</th>
		<th>value</th>
		<th>data</th>
		<th>description</th>
	</tr>
	<tr>
		<td>id</td>
		<td>string</td>
		<td>no</td>
        <td>string</td>
		<td>json</td>
		<td>for anchor links [name of the section]</td>
	</tr>
    <tr>
		<td>sectionStyles</td>
		<td>string</td>
		<td>no</td>
        <td>string</td>
		<td>-</td>
		<td>string of styles for section if it needed</td>
	</tr>
    <tr>
		<td>containerStyles</td>
		<td>string</td>
		<td>no</td>
        <td>string</td>
		<td>-</td>
		<td>string of styles for container if it needed</td>
	</tr>
    <tr>
		<td>children</td>
		<td>React.Node</td>
		<td>yes</td>
        <td>components</td>
		<td>json</td>
		<td>components & JSX-markup</td>
	</tr>
</table>
