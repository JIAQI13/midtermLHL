//view all maps
const viewAllMaps = () => {
  $.ajax({
    method: "GET",
    url: "/maps"
  }).done((maps) => {
    createMaps(maps);
  })
}

//create maps in the view all maps
const createMaps = (maps) => {
  for (const i in maps) {
    for (const a in maps[i]) {
      const $maps = `
        <input  type="submit" class="map-name" name="name" value="${maps[i][a].name}">
      `;
      $("<div id='user-file'>").html($maps).appendTo($(".square-view-all-maps"));
    }
  }
}

//view single map
const viewSingleMap = (result) => {
  $('#edit-map').empty('');
  const $map = `
    <div>
      <input id='map-edit-id' type="hidden" name="id" value='${result.maps[0].id}'>
      <input id='map-edit-name' name='name' value='${result.maps[0].name}'>
    </div>
    <div>
      <input id='map-edit-description' name='description' value="${result.maps[0].description}">
    </div>
    <input type='submit' value='Edit' class='editButton'>
  `;
  $(`<div>`).html($map).appendTo($("#edit-map"));
}

//view the latest added map
const viewLatestMaps = () => {
  $.ajax({
    method: "GET",
    url: "/maps/last"
  }).done((maps) => {
    createMaps(maps);
  })
}

//add a map to the database
const addMap = (req) => {
  $.ajax({
    method: 'POST',
    url: '/maps',
    data: $(req).serialize()
  })
    .then(() => {
      console.log('form submitted');
    });
}

//edit maps with put html calls
const editMap = (mapData) => {
  $.ajax({
    method: 'PUT',
    url: `/maps/edit`,
    data: mapData
  }).then((result) => {
    $(".square-view-all-maps").empty();
    viewAllMaps();
  });
}