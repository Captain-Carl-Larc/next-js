import {notFound} from "next/navigation"

export default function reviewDetails({params}:{
    params :{
        productId:string,
        reviewId:string
    }
}){
    return (
        <h1>review for {params.reviewId} for product {params.productId}</h1>
    )
}