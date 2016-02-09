$.get('/api/projects', function(projects){
   
    console.log(projects);
    
    for(var i=0;i<projects.length;i++){
        
        var project = projects[i];
        
        renderProjectRow(project);
        
    }
    
    
});

function renderProjectRow(project){
    
    var $tr = $('<tr>');
    var $td1 = $('<td>', { text : project.title });
    var $td2 = $('<td>', { text : project.postedOnDate });
    var $td3 = $('<td>');

    var $deleteButton = $('<div>', { text:'Delete', class:'btn btn-xs btn-danger' });
    var $editButton = $('<div>', { text:'Edit', class:'btn btn-xs btn-warning' });
    var $publishButton = $('<div>', { text:'Publish', class:'btn btn-xs btn-success' });

    $td3.append($deleteButton,' ', $editButton,' ', $publishButton);

    $tr.append($td1, $td2, $td3);

    $('#projects-body').append($tr);
    
}

$('#add-new-button').on('click', function(){
   
    $('#project-modal').modal('show');
    
});

$('#create-button').on('click', function(){
    
    var $title = $('#title-input');
    var $descr = $('#descr-input');
    
    var titleValue = $title.val();
    var descrValue = $descr.val();
    
    var projectData = {
        title : titleValue,
        description : descrValue
    };
    
    // /api/project
    $.post('/api/project', projectData, function(project){
       
        console.log('Project created');
        console.log(project);
        renderProjectRow(project);
        
    });
    
    $title.val('');
    $descr.val('');
    
    $('#project-modal').modal('hide')
    
});











