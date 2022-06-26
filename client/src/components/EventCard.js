import React from "react";

function EventCard(props){
    return (
        <div>
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableImg"><img src="https://via.placeholder.com/350x150" alt=''/></div>
                    </div>
                    <div class="divTableRow">
                        <div class="divTableTitle">{props.titulo}</div>
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
