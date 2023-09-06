import react, { useContext } from 'react'
import { routsNameMain } from '../../../../data/routsName'
import { routsNameString } from '../../../../data/routsNameString'
import { ContainerPosts, SLink } from './styles'

function RenderPostWithDate({ post }: any) {
  return (
    <a href={`${routsNameString.blog.details as string}${post._id}`}>
      <SLink color="#fff">
        <ContainerPosts>
          <div className="containerImg">
            <img src={post.imagePost} alt={post.marca} />
          </div>

          <div className="containerInfProduct">
            <p className="name">{post.nome}</p>
            <p className="date">{post.date}</p>
          </div>
        </ContainerPosts>
      </SLink>
    </a>
  )
}
export default RenderPostWithDate
