import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Detail = ({ data, data2 }) => {

    console.log(data)

    return (
        <div>
            {/* <img src={data[0].url} /> */}
            <img src="http://images.khan.co.kr/article/2020/11/25/l_2020112502001347700254271.jpg" />
        </div>
    )
}
export default Detail


export async function getStaticPaths() {
    const res = await axios.get(`http://localhost:3000/api`)
    const data = res.data.map(obj => ({ params: { coffee: obj.name } }))

    return {
        paths: data,
        fallback: true,  // fallback은 path네임생성 : true는 자동으로, false는 수동으로
    }
}

export async function getStaticProps({ params }) {
    console.log(params)
    const res = await axios.get(`http://localhost:3000/api/${params.coffee}`)
    const data = res.data

    return { props: { data } }
}


// export async function getServerSideProps() {

//     //const router = useRouter()
//     // console.log(router, 'wefwefwefwewfwef') //라우터는 서버에서 자바스크립트 파일이 오는중이라서
//     // 라우터는 못쓴다. 아직 모듈이 안왔으니까.

//     const res = await axios.get(`http://localhost:3000/api/cup`)
//     const data2 = res.data

//     return { props: { data2 } }
// }