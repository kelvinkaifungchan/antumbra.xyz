import React from 'react';
import "./issue.module.css"

interface Issue {
id: number,
issue: number,
title: string,
date: string,
link: string
}

export const Issue: React.FC<Issue> = ({issue, title, date, link}) => {

    const click = (link: string) => {
        if (link === "na") {
            return
        } else {
            window.open(link, '_blank')
        }
    }

    return (
    <tr onClick={() => click(link)}>
        <td>
            AARCHITECTURE {issue}
        </td>
        <td>
            {title}
        </td>
        <td style={{float: 'right'}}>
            {date}
        </td>
    </tr>
    )
}