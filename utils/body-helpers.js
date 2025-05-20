export function notifBody() {
    return {
            placeholders: [
                    { username: "QAStressTestDev-Notif" },
                    { category_slug: "face-1" },
                    { child_category_slug: "makeup-remover" },
                    { brand_slug: "bioderma" },
                    { product_slug: "sensibio-h2o-48" }
                ],
            type: "Like Review",
            receiver_user_id: 448313,
            image: "https://image.femaledaily.com/dyn/210/images/prod-pics/product_1537947928_Bioderma_S_800x800.jpg"
        }
    }

export function bodyToken(token){
    return {
        "token": `${token}`
    }
}