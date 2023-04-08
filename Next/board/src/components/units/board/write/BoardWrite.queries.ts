import { gql } from "@apollo/client";

export const CREATE_NEW_BOARD = gql`
    mutation createBoard($writer : String, $title : String ,$contents : String) { #변수이름과 타입적는곳
        createBoard(writer: $writer, title: $title, contents: $contents){ #실제로 전달되는 변수
            _id
            number
            message
        }
    }
`;

export const UPDATE_BOARDS = gql`
    mutation updateBoard($number:Int, $title:String, $contents:String, $writer:String){
        updateBoard(number:$number, title: $title, contents:$contents, writer:$writer){
            number
            message
        }
    }
`