import { ArticleCheck } from './article-check';

export class Article {
    pkArticle: number;
    fkBoard: number;
    ppkArticle: number;
    title: string;
    contents: string;
    pwd: string;
    hitCnt: string;
    fromdDt: string;
    toDt: string;
    seq: number;
    depth: number;
    articleChecks: ArticleCheck[];
}
