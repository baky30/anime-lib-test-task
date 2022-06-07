export interface IMovie {
    id: number
    bannerImage: string
    title: {
        userPreferred: string
        native: string
    }
}

export interface IPageInfo {
    currentPage: number
    hasNextPage: boolean
}
