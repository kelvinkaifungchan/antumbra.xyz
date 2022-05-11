export interface ArticleData {
    id: number,
    type: string,
    contributors: Array<Contributor>,
    title: string,
    subtitle: string,
    heroImage: string,
    pdf: string,
    datePublished: string,
    tags: Array<Tag>,
    articleBlocks: Array<ArticleBlockData>
    carousel?: Array<CarouselImage>
}

export interface ArticleModule {
    id: number,
    type: string,
    contributors: Array < Contributor > ,
    title: string,
    subtitle: string,
    heroImage: string,
    tags: Array < Tag >,
    pdf?: string
}

export interface ArticleBlockData {
    id: number;
    article_id: number;
    type: string;
    attachmentLink ? : string;
    attachmentCaption ? : string;
    text: string;
}

export interface BannerImageData {
    imageLink: string,
        imageCaption: string,
}

export interface CarouselImage {
    id: number;
    article_id: number;
    imageLink ? : string;
    imageCaption ? : string;
}

export interface Card {
    title: string,
    heroImage: string,
    subtitle: string,
    contributors: Array < Contributor >
}

export interface chipControlUnit {
    chipName: string,
    isRed: boolean
}

export interface Contributor {
    id: number;
    name: string;
    bio: string;
}

export interface IssueData {
    id: number,
    issue: number,
    title: string,
    date: string,
    link: string,
}

export interface Tag {
    id: number;
    tag: string
}

export interface TitleData {
    title: string,
    tags: Array < Tag > ,
    contributors: Array < Contributor > ,
    text ? : string,
    pdf ? : string
}

export interface TextData {
    text: string,
    attachmentLink ? : string,
    attachmentCaption ? : string,
}

export interface VideoData {
    videoLink: string,
}