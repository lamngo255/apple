<template>
  <div :class="['base-footer', [theme]]">
    <div class="container">
      <div class="policies">
        <p>1. Available for qualifying applicants in the United States.</p>
        <p>
          2. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
          Branch.
        </p>
        <p>
          3. Apple TV+ is $4.99/month after free trial. One subscription per
          Family Sharing group. Offer good for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other terms apply.
        </p>
      </div>
      <hr />
      <div class="grid">
        <div class="col" v-for="(colData, i) in footerData" :key="i">
          <div class="row" v-for="(row, j) in colData" :key="j">
            <div class="item" :class="{ header: !row.link }">
              {{ row.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseFooter',

  props: {
    theme: { type: String, default: 'light' },
  },

  data() {
    return {
      footerData: [
        [
          { name: 'Shop and Learn' },
          { name: 'Mac', link: 'mac' },
          { name: 'iPad', link: 'ipad' },
          { name: 'iPhone', link: 'iphone' },
          { name: 'Watch', link: 'watch' },
          { name: 'TV', link: 'tv' },
          { name: 'Music', link: 'music' },
          { name: 'Airpods', link: 'airpods' },
          { name: 'Homepod', link: 'homepod' },
          { name: 'iPod touch', link: 'ipod-touch' },
          { name: 'Cccessories', link: 'accessories' },
          { name: 'Gift cards', link: 'gift' },
        ],
        [
          { name: 'Services' },
          { name: 'Apple Music', link: 'apple-music' },
          { name: 'Apple TV+', link: 'apple-tv-plus' },
          { name: 'Apple Fitness+', link: 'apple-fitness-plus' },
          { name: 'Apple News+', link: 'apple-news' },
          { name: 'Apple Arcade', link: 'apple-arcade' },
          { name: 'iCloud', link: 'icloud' },
          { name: 'Apple One', link: 'apple-one' },
          { name: 'Apple Card', link: 'apple-card' },
          { name: 'Apple Books', link: 'apple-books' },
          { name: 'App Store', link: 'app-store' },
          { name: 'Account' },
          { name: 'Manage Your Account Id', link: '#' },
          { name: 'Apple Store Account', link: '#' },
          { name: 'iCloud.com', link: '#' },
        ],
        [
          { name: 'Apple Store' },
          { name: 'Find a store', link: 'retail' },
          { name: 'Shop online', link: 'shop-online' },
          { name: 'Genius Bar', link: 'retai/genius-bar' },
          { name: 'Today at Apple', link: 'today' },
          { name: 'Apple Camp', link: 'today/camp' },
          { name: 'Apple Store App', link: 'app-store' },
          { name: 'Refurbished & clearance', link: 'special-deals' },
          { name: 'Financing', link: 'payment-plan' },
          { name: 'Apple Trade In', link: 'trade-in' },
          { name: 'Order Status', link: 'order-status' },
          { name: 'Shopping Help', link: 'shopping-help' },
        ],
        [
          { name: 'For Business' },
          { name: 'Apple and Business', link: 'business' },
          { name: 'Shop for Business', link: '#' },
          { name: 'For Education' },
          { name: 'Apple and Education', link: 'education' },
          { name: 'Shop for K12', link: 'education' },
          { name: 'Shop for College', link: 'education' },
          { name: 'For Healthcare' },
          { name: 'Apple in Healthcare', link: 'education' },
          { name: 'Health on Apple Watch', link: 'education' },
          { name: 'Health Records on iPhone', link: 'education' },
          { name: 'For Government' },
          { name: 'Shop for Government', link: 'education' },
          { name: 'Shop for Veterans and Military', link: 'education' },
        ],
        [
          { name: 'Apple Values' },
          { name: 'Accessibility', link: 'business' },
          { name: 'Education', link: '#' },
          { name: 'Environment', link: '#' },
          { name: 'Inclusion and Diversity', link: 'retail/business' },
          { name: 'Privacy', link: '#' },
          { name: 'Supplier Responsibility', link: '#' },
          { name: 'About Apple' },
          { name: 'Newsroom', link: 'business' },
          { name: 'Apple Leadership', link: '#' },
          { name: 'Job Opportunities', link: '#' },
          { name: 'Investors', link: '#' },
          { name: 'Events', link: '#' },
          { name: 'Contact Apple', link: '#' },
        ],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 68%;
  margin: 0 auto;

  .policies {
    @include textMixin(#929296, 0.11rem, $align: left);
    margin: 0.2rem auto;
  }

  .grid {
    @include flexCenter(row);
    @include textMixin(#515154, 0.11rem, $align: left);
    justify-content: space-around;
    align-items: flex-start;

    .col {
      @include flexCenter(column);
      margin-right: 0.7rem;
      align-items: flex-start;

      .row {
        div.header {
          font-weight: bold;
          margin-top: 0.2rem;
        }
        div {
          font-weight: normal;
          margin-top: 0.09rem;
        }
      }
    }
  }
}

.base-footer {
  @include sizeWH(100%, auto);
  position: relative;
  background: #f5f5f7;
  padding-bottom: 0.5rem;

  &.dark {
    background: #111;

    .grid {
      color: #a1a1a6;
      .col {
        .row {
          div.header {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
