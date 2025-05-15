export function bodyPostman(){
    return {
        test: "value"
    }
}

export function notifBody() {
    return {
            placeholders: [
                    { username: "hengkytest41" },
                    { category_slug: "eyes" },
                    { child_category_slug: "eyeliner" },
                    { brand_slug: "maybelline" },
                    { product_slug: "hypersharp-liner" }
                ],
            type: "Like Review",
            receiver_user_id: 446890,
            image: "https://image.femaledaily.com/dyn/210/images/prod-pics/product_1545194985_Maybelline_800x800.jpg"
        }
    }