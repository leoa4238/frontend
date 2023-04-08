import styled from "@emotion/styled";
import { IRowItemProps } from "../../../../commons/types/boardType";

export const ListWrap = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    
`;

export const Row = styled.div`
    display: flex;
    height: 80px;
`;



export const RowItem = styled.div`
    text-align: ${
        ({type}:IRowItemProps)=> type !== 'title' && 'center'
    };

    ${
        ({type}:IRowItemProps)=> type === 'number' && {
            'flex-basis':'100px'
        }
    }
    ${
        ({type}:IRowItemProps)=> type === 'title' && {
            'flex-basis':'500px'
        }
    }
    
    ${
        ({type}:IRowItemProps)=> type === 'date' && {
            'flex-basis':'200px'
        }
    }

    ${
        ({type}:{type:string})=> type === 'writer' && {
            'flex-basis':'400px'
        }
    }


    padding: 10px;
    border: 1px solid black;
`;

// export const BoardNumber = styled.div`
//     text-align: center;
// `;

// export const BoardTitle = styled.div`
    
// `;

// export const BoardDate = styled.div`
//     text-align: center;
// `;

// export const BoardWriter = styled.div`
//     text-align: center;
// `;


