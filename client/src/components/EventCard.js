import React from "react";

function EventCard(props){
    return (
        <div>
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableImg"><a href={'evento/' + props.id}><img src={ props.imagem } width="350" height="150" alt=''/></a></div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableTitle"><a href={'evento/' + props.id}>{props.titulo}</a></div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableResume">{ props.descricao_resumo }</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableLocal">{ props.local }, { props.cidade }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;
