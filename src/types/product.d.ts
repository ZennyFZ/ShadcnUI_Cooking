export interface ProductInterface {
    _id: string,
    name: string,
    isQuantity: string,
    status: boolean,
    imageId: string,
    imageUrl: string,
    price: number,
    discountedPrice: number,
    description: string,
    category: CategoryInterface,
    numberOfSelling: number
}

export interface CategoryInterface {
    _id: string,
    name: string
}