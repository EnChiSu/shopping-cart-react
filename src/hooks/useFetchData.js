import { useState, useEffect, useCallback } from 'react';
import axios from "axios"

function useFetchData() {
    const [loading, setLoading] = useState(false);
    const products = [
        {
            id: 0,
            infos: {
                img_url: '/images/product0.png',
                title: 'LN 新竹街口攻城獅台灣封城紫色旋風聯名款限定發售復古球衣系列',
                saleLowPrice: '2,999',
                saleHighPrice: '3,999',
                formalLowPrice: '3,699',
                formalHighPrice: '4,699',
                tag: ['街口結帳享九折優惠', '訂單滿399免運費'],
                note: ['請於訂單備註填寫您需要的球員', '球員搭配之號碼不可替換', '球員款克制訂單出貨需要十四個工作天'],
                size: ['S', 'L', 'XL', 'XXL'],
                color: ['酷炫黑', '紫旋風', '耀眼黃', '我是第二行選項']
            },
            details: {
                category: '這邊可以填寫純文字內容',
                description: '靈感來自90年代復古球衣，洞洞布料搭載拉克蘭袖設計，專業球衣打造休閒封上，適合日常生活穿搭',
                note: '請於訂單備註填寫您需要的號碼，若未填寫將以空白求醫記出，客製化商品不接受退換貨'
            },
        }
    ]

    return { loading, products };
}

export default useFetchData;