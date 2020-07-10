import gql from 'graphql-tag'
import {IsNotEmpty} from 'class-validator'

export class LOGIN_DATA {
  @IsNotEmpty({
    message: '必填项'
  })
  password!: string;

  @IsNotEmpty({
    message: '必填项'
  })
  account!: string
}

export interface LOGIN_MANAGER {
  /**
   * 账号
   */
  account: string | null;

  /**
   * 用户头像
   */
  avatarUrl: string | null;

  /**
   * 昵称
   */
  nickname: string | null;

  /**
   * 更新时间
   */
  updateTime: number | null;
}

export const GET_LOGIN = gql`
  query LoginManager( $password: String, $account: String ) {
    loginManager(password: $password, account: $account) {
      account
      avatarUrl
      nickname
      updateTime
    }

  }
`
