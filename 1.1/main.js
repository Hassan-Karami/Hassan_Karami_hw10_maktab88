$(() => {
    $('#reqContainer, #resContainer,#codeCantainer').hide();
    $('#clickBtn').attr('disabled', 'true')
    $('#typeSelect').on({
        change: function (evenet) {
            $('#reqContainer, #resContainer,#codeCantainer').hide();
            $('#clickBtn').attr('disabled', 'true');

            if ($('#typeSelect').val() === 'post') {
                $('#reqContainer, #resContainer,#codeCantainer').fadeIn();
                $('#clickBtn').removeAttr('disabled');
            }
            if ($('#typeSelect').val() === 'get') {
                $('#resContainer,#codeCantainer').fadeIn();
                $('#clickBtn').removeAttr('disabled');
            }
        }
    })

    $('#clickBtn').on({
        click: function(event){
            $.ajax({
                url: $("#urlInput").val(),
                type: $("#typeSelect").val(),
                success : function (res,statusText,Header) {       
                    console.log(res);
                    if($("#typeSelect").val()=== 'get') {
                        $('#res2').val(JSON.stringify(res, null, 4));
                        $('#resCode').val(`PlainText: ${this.dataTypes} Status ${Header.status}`)
                    }
                    else{
                        $('#req1').val(JSON.stringify(res, null, 4));
                        $('#resCode').val(`PlainText: ${this.dataTypes} Status ${Header.status}`)
                    }
                },
                error: function(error){
                },
            })
        }
    })
})

