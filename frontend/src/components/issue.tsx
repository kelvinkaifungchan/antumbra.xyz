interface Issue {
    number: number,
    title: string,
    date: string,
    link?: string
}

export const Issue: React.FC<Issue> = ({number, title, date, link}) => {
return (
    <tr>
    <td>{number}</td>
    <td>{title}</td>
    <td style={{float: 'right'}}>{date}</td>
</tr>
)
}