declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.svg?url' {
  const url: string;
  export default url;
}