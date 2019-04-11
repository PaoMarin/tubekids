export class Constants {
  public static get BASE_URL(): string { return 'http://localhost:8000/api/'; };

  public static build_url(url: string) {
    return Constants.BASE_URL + url;
  }
}
