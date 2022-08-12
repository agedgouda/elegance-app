<template>
  <div class="item">
        <div class="active_{{ item.active}}">
          <div class="property_name">
            <h2 class="prop_name>">
              <a :href="'https://platform.hostfully.com/property_edit.jsp?uid='+item.hostfully_id">{{ item.name}}</a>
            </h2>
            <p>{{ item.address}}<br />
            {{ item.city}}, {{ item.state}} {{ item.zip}}
            </p>
          </div>
          <div class="public_name">
            <p>{{ item.public_name}}</p>
          </div>
          <div class="host_info">
            <h4>
              {{ item.hostname}}
            </h4>
            <p>
              {{ item.phone}}<br />
              {{ item.email}}
            </p>
          </div>
          <div :class= item.tier class="tier">
            {{ item.tier}}
          </div>
          <div class="rating">
            <span :style="getColor(item.rating)">{{ item.rating}}</span><span>&#9734;</span>
            <p>{{ item.reviews}} reviews</p>
          </div>
          <div class="wifi">
            <p><span>WiFi:</span> <input type="text" v-model=item.wifi_ssid readonly></p>
            <p><span>Password:</span> <input type="text" v-model=item.wifi_password readonly></p>
          </div>
          <ul>
            <li><span>Type:</span> {{ item.type}}</li>
            <li><span>Bedrooms:</span> {{ item.bedroom}}</li>
            <li><span>Bath:</span> {{ item.bath}}</li>
            <li><span>Beds:</span> {{ item.beds}}</li>
            <li><span>Maintenance:</span> {{ item.maintenance}}</li>
          </ul>
          <hr />
          <span class="tags" v-if="item.pets">Pets</span> 
          <span class="tags" v-if="item.insurance !=='false'">Insurance </span>
          <span class="tags" v-if="item.exterminator !=='false'">Exterminator </span>
          <span class="tags" v-if="item.consumables !=='false'">Consumables</span>
          <span class="tags" v-if="item.lawn !=='false'">Lawn</span>
          <hr />
          <ul>
            <li class="str_icons">
              <span><a :href=item.airbnb><img src="/images/airbnb_icon.png" alt="airbnb logo" /></a></span>
              <span><a :href=item.vrbo><img src="/images/vrbo-icon.png" alt="vrbo-icon.png logo" /></a></span>
              <span><a :href=item.hostfully><img src="/images/hostfully.png" alt="hostfully logo" /></a></span>
              <span><a :href=item.video class="youtube" video-item="{{ item.video}}"><img src="/images/youtube.png" alt="youtubee logo" /></a></span>
            </li>
          </ul>
          <div class="notes">
            <p>{{ item.notes}}</p>
          </div>
        </div>
  </div>
</template>

<script>
export default {
    props:{
        item:Object
    },
methods:{
  getColor(rating){
    if (rating <=4.6) {
      return {
        background: "#ff0000"
      }
    }
    if (rating == 0) {
      return {
        background: "#bbb"
      }
    }
  }
}
}
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}
span.tags{
  display: inline-block;
  padding: 2px 3px;
  background: #d0f7d9;
  color: #129632;
  border: 1px solid #129632;
  border-radius: 4px;
  font-size: 13px;
  margin: 2px 0px 2px 5px;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0;
    
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
