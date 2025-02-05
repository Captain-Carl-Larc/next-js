export default function allReviews({params}:{
    params :{productId:string}
}){
    return (
        <h1>This sows all the reviews for product {params.productId}</h1>
    )
}