<div ng-switch-when="USAEng">
	 		<form action="#">
				<div class="btn-group" role="group" aria-label="Basic radio toggle button group" style="padding-top: 30px;">
  				<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" ng-model="USAEng" value="usaindividual">
  				<label class="btn btn-outline-primary" for="btnradio1">Індивідуальне навчання</label>

 				<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" ng-model="USAEng" value="usagroup">
 				<label class="btn btn-outline-primary" for="btnradio2">Групове навчання</label>

 				<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" ng-model="USAEng" value="usaself">
 				<label class="btn btn-outline-primary" for="btnradio3">Самостійне навчання</label>
			</div>
			</form>
			<div ng-switch="USAEng">
				<div ng-switch-when="usaindividual">
					<img src="languages.png">
				</div>
				<div ng-switch-when="usagroup">
					<img src="left.png">
				</div>
				<div ng-switch-when="usaself">
					<img src="right.png">
				</div>
			</div>
	 	</div>
		<div ng-switch-when="Ger">
	 		<form action="#">
				<div class="btn-group" role="group" aria-label="Basic radio toggle button group" style="padding-top: 30px;">
  				<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" ng-model="Ger" value="gerindividual">
  				<label class="btn btn-outline-primary" for="btnradio1">Індивідуальне навчання</label>

 				<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" ng-model="Ger" value="gergroup">
 				<label class="btn btn-outline-primary" for="btnradio2">Групове навчання</label>

 				<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" ng-model="Ger" value="gerself">
 				<label class="btn btn-outline-primary" for="btnradio3">Самостійне навчання</label>
			</div>
			</form>
			<div ng-switch="Ger">
				<div ng-switch-when="gerindividual">
					<img src="languages.png">
				</div>
				<div ng-switch-when="gergroup">
					<img src="left.png">
				</div>
				<div ng-switch-when="gerself">
					<img src="right.png">
				</div>
			</div>
		</div>
		<div ng-switch-when="Fre">
	 		<form action="#">
				<div class="btn-group" role="group" aria-label="Basic radio toggle button group" style="padding-top: 30px;">
  				<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" ng-model="Fre" value="Freindividual">
  				<label class="btn btn-outline-primary" for="btnradio1">Індивідуальне навчання</label>

 				<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" ng-model="Fre" value="Fregroup">
 				<label class="btn btn-outline-primary" for="btnradio2">Групове навчання</label>

 				<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" ng-model="Fre" value="Freself">
 				<label class="btn btn-outline-primary" for="btnradio3">Самостійне навчання</label>
			</div>
			</form>
			<div ng-switch="GFre">
				<div ng-switch-when="Freindividual">
					<img src="languages.png">
				</div>
				<div ng-switch-when="Fregroup">
					<img src="left.png">
				</div>
				<div ng-switch-when="Freself">
					<img src="right.png">
				</div>
			</div>
		</div>
		<div ng-switch-when="Pol">
			<form action="#">
				<div class="btn-group" role="group" aria-label="Basic radio toggle button group" style="padding-top: 30px;">
  				<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" ng-model="Pol" value="polindividual">
  				<label class="btn btn-outline-primary" for="btnradio1">Індивідуальне навчання</label>

 				<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" ng-model="Pol" value="polgroup">
 				<label class="btn btn-outline-primary" for="btnradio2">Групове навчання</label>

 				<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" ng-model="Pol" value="polself">
 				<label class="btn btn-outline-primary" for="btnradio3">Самостійне навчання</label>
			</div>
			</form>
			<div ng-switch="Pol">
				<div ng-switch-when="polindividual">
					<img src="languages.png">
				</div>
				<div ng-switch-when="polgroup">
					<img src="left.png">
				</div>
				<div ng-switch-when="polself">
					<img src="right.png">
				</div>
			</div>
		</div>
		<div ng-switch-when="Span">
			<form action="#">
				<div class="btn-group" role="group" aria-label="Basic radio toggle button group" style="padding-top: 30px;">
  				<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" ng-model="Span" value="spanindividual">
  				<label class="btn btn-outline-primary" for="btnradio1">Індивідуальне навчання</label>

 				<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" ng-model="Span" value="spangroup">
 				<label class="btn btn-outline-primary" for="btnradio2">Групове навчання</label>

 				<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" ng-model="Span" value="spanself">
 				<label class="btn btn-outline-primary" for="btnradio3">Самостійне навчання</label>
			</div>
			</form>
			<div ng-switch="Span">
				<div ng-switch-when="spanindividual">
					<img src="languages.png">
				</div>
				<div ng-switch-when="spangroup">
					<img src="left.png">
				</div>
				<div ng-switch-when="spanself">
					<img src="right.png">
				</div>
			</div>
		</div>





		<div class="row" style="padding-top: 45px; margin-left: 3%; margin-right: 3%;">
						<div class="col-6">
							<div class="card mb-3" style="max-width: 94%; border-radius: 8px;">
							  <div class="row g-0">
							    
							    <div class="col-md-7">
							      <div class="card-body">
							      	<div style="margin-left: -33px; margin-top: 5px; font-size: 11px; color: white; width: 135px; height: 19px; font-weight: 600; background-color: red; position: absolute; transform: rotate(325deg); border-radius: 25% 25% 8% 8%;">
							      		<b>ПОПУЛЯРНИЙ</b>
							      	</div>
							        <h5 class="card-title">Card title</h5>
							        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
							      </div>
							    </div>
							    <div class="col-md-5" style="display: flex; align-items: center; justify-content: center;">
							      <img src="ind1.png" style="width: 95%; border-radius: 20px;">
							    </div>

							  </div>
							</div>
						</div>
						<div class="col-6">
							<div class="card mb-3" style="max-width: 94%; border-radius: 8px;">
							  <div class="row g-0">
							  	
							    <div class="col-md-5" style="display: flex; align-items: center; justify-content: center;">
							      <img src="ind2.jpg" style="width: 95%; border-radius: 20px;">
							    </div>
							    <div class="col-md-7">
							      <div class="card-body">
							        <h5 class="card-title">Card title</h5>
							        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
							      </div>
							    </div>    

							  </div>
							</div>
						</div>
					</div>

					<div class="row" style="padding-top: 35px; margin-left: 3%; margin-right: 3%;">
						<div class="col-6">
							<div class="card mb-3" style="max-width: 94%; border-radius: 8px;">
							  <div class="row g-0">
							    
							    <div class="col-md-7">
							      <div class="card-body">
							        <h5 class="card-title">Card title</h5>
							        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
							      </div>
							    </div>
							    <div class="col-md-5" style="display: flex; align-items: center; justify-content: center;">
							      <img src="ind3.jpg" style="width: 95%; border-radius: 20px;">
							    </div>

							  </div>
							</div>
						</div>
						<div class="col-6">
							<div class="card mb-3" style="max-width: 94%; border-radius: 8px;">
							  <div class="row g-0">
							  	
							    <div class="col-md-5" style="display: flex; align-items: center; justify-content: center;">
							      <img src="ind4.png" style="width: 95%; border-radius: 0px;">
							    </div>
							    <div class="col-md-7">
							      <div class="card-body">
							        <h5 class="card-title">Card title</h5>
							        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
							      </div>
							    </div>    

							  </div>
							</div>
						</div>
