$(document).ready(function(){
	const spinner = document.getElementById('spinner')
	const tableBody = document.getElementById('table-body-box')
	const modalBody = document.getElementById('modal-body')

	const url = window.location.href
	console.log(url)

	$.ajax({

		url: "/data-json/",
		method: "GET",
		success: function(response){
			console.log(response);
			const data = JSON.parse(response.data)
			console.log(data);
			data.forEach(el => {console.log(el.fields)
					tableBody.innerHTML += `
						<tr>
							<td>${el.pk}</td>
							<td><div class="my-img" data-bs-toggle="modal" data-bs-target="#previewPicModal" data-pic=media/${el.fields.item}><img src=media/${el.fields.item} class="img-photo" height="40px"</div></td>
							<td>${el.fields.info}</td>
						</tr>
					`
				})
			spinner.classList.add('not-visible')

			const imgPhoto = [...document.getElementsByClassName('img-photo')]
			console.log(imgPhoto);
			imgPhoto.forEach(item=>item.addEventListener('click', e=>{
				const pic = e.target.parentElement.getAttribute('data-pic')
				console.log(pic);
				modalBody.innerHTML = `<img src=${pic} height='250px'>`
		}))
		},
		error: function(error){
			console.log(error)
		}

	});


})