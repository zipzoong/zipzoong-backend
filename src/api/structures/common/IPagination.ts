export interface IPaginatedResponse<T> {
    data: T[];
    /**
     * @type uint
     * @minimum 1
     */
    page: number;
}

export interface IPage {
    /**
     * @type uint
     * @minimum 1
     * @default 1
     */
    page?: number;
}
