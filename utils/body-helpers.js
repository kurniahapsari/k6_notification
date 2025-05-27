// export function notifBody() { // dev
//     return {
//             placeholders: [
//                     { username: "QAStressTestDev-Notif" },
//                     { category_slug: "face-1" },
//                     { child_category_slug: "makeup-remover" },
//                     { brand_slug: "bioderma" },
//                     { product_slug: "sensibio-h2o-48" }
//                 ],
//             type: "Like Review",
//             receiver_user_id: 448313,
//             image: "https://image.femaledaily.com/dyn/210/images/prod-pics/product_1537947928_Bioderma_S_800x800.jpg"
//         }
//     }

//prod
export function notifBody() {
    return {
            placeholders: [
                    { username: "QAStressTestProd-Notif" },
                    { category_slug: "oil-1" },
                    { child_category_slug: "vitamin-serum" },
                    { brand_slug: "ellips" },
                    { product_slug: "hair-vitamin-1" }
                ],
            type: "Like Review",
            receiver_user_id: 114313,
            image: "https://image.femaledaily.com/dyn/210/images/prod-pics/product_1442301703_ellips_800x800.jpg"
        }
    }

export function bodyToken(token){
    return {
        "token": `${token}`
    }
}