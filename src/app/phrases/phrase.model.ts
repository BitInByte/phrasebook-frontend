class Phrase {
  // private author: Author;

  constructor(
    public id: string,
    public author: string,
    public countLikes: number,
    public countShares: number,
    public createdAt: number,
    public isLiked: boolean,
    public isShared: boolean,
    public isOwnPhrase: boolean,
    public phrase: string,
    public isPhraseAuthorOnFriendsList: boolean
  ) {}

  toggleLiked(): void {
    this.isLiked = !this.isLiked;
  }

  toggleShared(): void {
    this.isShared = !this.isShared;
  }
}

export default Phrase;
