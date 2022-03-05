import React from 'react'
import * as S from './styled'


const Profile = () => {
  return (
  <S.Wraper>
    <div>
        <img src="https://avatars.githubusercontent.com/u/41841309?v=4" alt="foto do usuario"/>
        <h1>Bruno Silva</h1>
      <S.Wraper>  <h3>Username: </h3>
        <span>brunopfsilva</span></S.Wraper>
    </div>
    <S.Wraper>
        <div>Repositories</div>
        <div>Staredes</div>
        <div>
          <h4>
            Followers
          </h4>
          <span>5</span>
        </div>
        <div>
          <h4>
           Starredes
          </h4>
          <span>3</span>
        </div>
        <div>
          <h4>
           Fallowings
          </h4>
          <span>3</span>
        </div>
        </S.Wraper>
  </S.Wraper>
  )
}

export default Profile