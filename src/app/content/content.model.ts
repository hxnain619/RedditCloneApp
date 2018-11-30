export class ContentData {
    title: string;
    link: string;
    points: number;

    constructor(title: string, link: string, points: number) {
        this.title = title;
        this.link = link;
        this.points = points || 0;
    }

    increment() {
        this.points++;
    }

    decrement() {
        this.points === 0 ? this.points = 0 : this.points--;
    }
    
    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }

}