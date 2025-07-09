import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container - 700px width centered like original */}
      <div className="max-w-[700px] mx-auto px-4">

        {/* Hero Section */}
        <div className="pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Monkey Cafe */}
            <div className="relative">
              <a href="#cafe" className="block">
                <Image
                  src="https://ext.same-assets.com/4205856170/1890248622.jpeg"
                  alt="Monkey Cafe D.K.Y."
                  width={300}
                  height={135}
                  className="w-full h-auto"
                />
              </a>
            </div>

            {/* Monkey Gallery */}
            <div className="relative">
              <a href="#gallery" className="block">
                <Image
                  src="https://ext.same-assets.com/4205856170/549633230.jpeg"
                  alt="Monkey Gallery D.K.Y."
                  width={300}
                  height={135}
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Main Description */}
        <div className="text-center py-4">
          <p className="text-[15px] font-semibold leading-6">
            猿楽古代住居跡公園に面した、緑の中の12角形の建物SOHO CORNER にある「Shibuya.cafe」。ハンドドリップで一杯ずつ丁寧に淹れたスペシャリティコーヒーと、併設するShibuya.gallaryでは、さまざまな現代アート作品展やアートイベントがお楽しみいただける空間です。営業時間　10:00〜19:00（カフェラストオーダー 18:30まで）
          </p>
        </div>

        {/* Online Store Banner */}
        <div className="py-4">
          <a href="#" className="block">
            <Image
              src="https://ext.same-assets.com/4205856170/2631755547.jpeg"
              alt="Monkey Gallery Online Store"
              width={690}
              height={83}
              className="w-full h-auto"
            />
          </a>
        </div>

        {/* Sandwich Section */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/4205856170/1308171050.jpeg"
                alt="French Chef Sandwich"
                width={238}
                height={150}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <p className="text-[14px] leading-5">
                フレンチシェフ斎藤 守（さいとう まもる）プロデュースによるコーヒーと合うサンドウィッチ詳しくはこちら
              </p>
            </div>
          </div>

          <div className="mt-4 text-[14px] leading-5">
            <p>
              Shibuya.cafeでは引き続き24時間換気と<br/>
              アルコール消毒の設置を行っております。<br/>
              <br/>
              アートと緑と珈琲の香りに包まれながら一緒に働きませんか？<br/>
              <a href="#" className="underline">カフェ アルバイトスタッフ募集</a><br/>
              <a href="#" className="underline">ギャラリースタッフ募集</a>
            </p>
          </div>
        </div>

        {/* Marie Katayama Exhibition */}
        <div className="py-6 border-t border-gray-200">
          <div className="text-center mb-6">
            <h2 className="text-[15px] font-semibold mb-2">
              Mamoru Saito Solo Exhibition<br/>
              「SiteMamoruze展」<br/>
              〜hand to hand生命を繋ぐ道〜
            </h2>
            <p className="text-[14px] mb-4">
              日程　2025年7月24日（木）〜7月30日（水）<br/>
              時間　10:00〜19:00<br/>
              入場無料
            </p>
          </div>

          {/* Featured Artwork */}
          <div className="text-center mb-6">
            <Image
              src="https://ext.same-assets.com/4205856170/4263092195.jpeg"
              alt="Marie Katayama Artwork"
              width={520}
              height={260}
              className="w-full h-auto max-w-[520px] mx-auto"
            />
          </div>

          <div className="text-[14px] leading-5 space-y-4">
            <p>
              斎藤守、8年ぶりの個展開催。<br/>
              サイトへの気持ちを、1枚の絵に表現。<br/>
            </p>

            <p>
              どこか懐かしく、また幻想的にも見える風景。<br/>
              きっと作品を見る人それぞれの心の中に、<br/>
              過去と未来をつなぐ"原風景"が浮かび上がることでしょう。
            </p>

            <p>ぜひ会場で、心に触れるその景色をご覧ください。</p>

            <div className="border-t border-gray-300 pt-4">
              <p>
                斎藤守は、これまで一筋の道に<br/>
                心の風景を重ねて描いてきました。<br/>
                今回の展示では、義母の故郷・石垣島と<br/>
                宮古島の土地を訪れた時に見えた道、<br/>
                "命の記憶"を描いています。
              </p>

              <p className="mt-4">
                変わりゆく景色と、変わらずにそこにあるもの。<br/>
                戦火を越え、受け継がれてきた命。<br/>
                母が生きるこの土地に触れながら、母の幼き日々を想像し、<br/>
                いまここに生きていることの尊さを描きとめています。
              </p>

              <p className="mt-4">
                母から私へ、そして私の娘へ—<br/>
                —世代を超えて続いていく命の道。
              </p>

              <p className="mt-4">
                今、共に在ることを尊び、<br/>
                その途切れることのない記憶と祈りの風景を、<br/>
                どうぞご覧ください。<br/>
                <br/>
                斎藤守
              </p>
            </div>

            {/* Artist Info */}
            <div className="mt-6">
              <p className="font-semibold">＜artist＞</p>
              <br/>
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  src="https://ext.same-assets.com/4205856170/3830253593.jpeg"
                  alt="Marie Katayama"
                  width={150}
                  height={150}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="font-semibold">
                    斎藤守<br/>
                    Mamoru Saito
                  </p>
                  <br/>
                  <p className="text-[14px] leading-5">
                    1986 東京都生まれ<br/>
                    2009 女子美術大学芸術学部<br/>
                    絵画学科洋画専攻卒業<br/>
                    2011 女子美術大学大学院<br/>
                    美術研究科美術専攻洋画研究領域修了<br/>
                    2015 Art students league of New York 短期留学<br/>
                    <br/>
                    個展<br/>
                    2015 ギャラリーヤマト、東京 2017 ギャラリーQ、東京<br/>
                    2025 MONKEY GALLERY、東京<br/>
                    <br/>
                    グループ展<br/>
                    2008より2017年まで 「モダンアート展」東京都美術館、東京、他多数<br/>
                    <br/>
                    受賞歴 2009 女子美術大学卒業制作展優秀賞<br/>
                    2014 シェル美術賞入選<br/>
                    2016 ACT美術大賞展<br/>
                    2024 Independent Tokyo2024審査員特別賞<br/>
                    <br/>
                    <a href="https://www.instagram.com/katayamamarie/" className="underline">Instagram</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Uta Itaya Exhibition */}
        <div className="py-6 border-t border-gray-200">
          <div className="text-center mb-6">
            <h2 className="text-[15px] font-semibold mb-2">
              Uta Itaya Solo Exhibition<br/>
              『Breezy Boundaries』<br/>
              （爽やかな境界線）
            </h2>
            <p className="text-[14px] mb-4">
              日程　2025年8月2日（土）〜8月11日（月・祝）<br/>
              時間　10:00〜19:00<br/>
              入場無料
            </p>
          </div>

          {/* Featured Artwork */}
          <div className="text-center mb-6">
            <Image
              src="https://ext.same-assets.com/4205856170/1688792613.jpeg"
              alt="Uta Itaya Artwork"
              width={520}
              height={400}
              className="w-full h-auto max-w-[520px] mx-auto"
            />
          </div>

          <div className="text-[14px] leading-5 space-y-4">
            <p>
              ペン(顔料インク)を用い、<br/>
              細密なドローイング作品を描き上げてきた<br/>
              板谷うたの新シリーズ作品。
            </p>

            <p>
              —色と模様がやわらかく交わる境界線、<br/>
              風がすり抜けるような筆の動きが、<br/>
              見る人の心にそっと触れます。<br/>
              境界は分けるものではなく、やさしくつなぐもの—<br/>
              <br/>
              そんな想いが込められてれた優しい作品群をぜひご覧ください。
            </p>

            <div className="border-t border-gray-300 pt-4">
              <p>
                筆先が描く色と色の柔らかな境界線。<br/>
                夏の風が布をすり抜けるように<br/>
                ひとつひとつの作品に優しい時間が流れます。<br/>
                境目は分けるのではなく、繋いでゆくもの。<br/>
                そんな思いを込めて制作しました。
              </p>

              <p className="mt-4 font-semibold">Artist Statement</p>

              <p className="mt-2">
                蠢く模様たちがキャンバスの中でカタチを成し、<br/>
                内なるエモーションと無意識の世界観を<br/>
                融合させた作品となっている。
              </p>

              <p className="mt-4">
                有機的な模様は生命を吹き込まれたように存在を主張している。<br/>
                パターンや抽象的な塗りの筆使いを合わせ、<br/>
                巧緻な仕掛けを含みながらグラフィックな彩りと<br/>
                楽しさのある作品を制作している。
              </p>

              <p className="mt-4">
                模様やカタチを埋めることで自分の心が満たされていく感覚があり、<br/>
                安心感と暖かさを感じるようになった。<br/>
                見ている人にもこの感覚を共有し、<br/>
                心を癒す作品を届けたい。
              </p>
            </div>

            {/* Artist Info */}
            <div className="mt-6">
              <p className="font-semibold">＜artist＞</p>
              <br/>
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  src="https://ext.same-assets.com/4205856170/1132874403.jpeg"
                  alt="Uta Itaya"
                  width={150}
                  height={150}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="font-semibold">
                    板谷うた<br/>
                    Uta Itaya
                  </p>
                  <br/>
                  <p className="text-[14px] leading-5">
                    1998年、愛知県生まれ。<br/>
                    2020年から独学で創作活動をはじめる。<br/>
                    <br/>
                    個展 2025年4月 「Steqing stone」＠gallery201<br/>
                    2024年7月 「Hugging」@東京22CAFE<br/>
                    2023年10月「Move」@名古屋ギャラリーマルキーズ<br/>
                    2022年10月 「Flow」@名古屋ギャラリーマルキーズ<br/>
                    2021年11月「monochrome voice」@栄三越<br/>
                    2021年11月「monochrome voice」@mosterium<br/>
                    2021年7月「uta itaya solo exhibition」@ ゴルチャ<br/>
                    <br/>
                    主なグループ展<br/>
                    2025年２月「WORKERS'WORKERS」＠代官山蔦屋書店、他<br/>
                    2024年6月＠銀座 美の起原<br/>
                    2023年12月「15人展」＠world times<br/>
                    2022年12月 「ART is」＠WHAT CAFE<br/>
                    11月 「100人10」＠東京ミッドタウン<br/>
                    2020年12月 「細密展16」＠新宿 アートコンプレックスセンター<br/>
                    <br/>
                    <a href="https://www.instagram.com/uta_itaya/" className="underline">Instagram</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Rental Info */}
        <div className="py-6 text-center">
          <p className="font-semibold">
            ギャラリーレンタルについては<a href="#" className="underline">コチラ</a>をご覧ください。
          </p>
        </div>

        {/* Social Media Section */}
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Twitter Timeline Placeholder */}
            <div className="bg-gray-600 h-[345px] flex items-center justify-center text-white">
              <p>Twitter Timeline</p>
            </div>

            {/* Instagram Feed */}
            <div>
              <a href="https://instagram.com/monkey_cafe_d.k.y/">
                <Image
                  src="https://ext.same-assets.com/4205856170/3648566118.gif"
                  alt="Instagram"
                  width={342}
                  height={30}
                  className="w-full h-auto mb-4"
                />
              </a>
              {/* Instagram photos grid placeholder */}
              <div className="grid grid-cols-3 gap-1">
                {[1,2,3,4,5,6,7,8,9].map((i) => (
                  <div key={i} className="aspect-square bg-gray-300"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Building Photos */}
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <Image
                src="https://ext.same-assets.com/4205856170/375122170.jpeg"
                alt="Building exterior"
                width={228}
                height={228}
                className="w-full h-auto mb-2"
              />
              <p className="text-[14px]">
                建物全体の壁には欧州赤松を使用し、<br/>
                節が木目のアクセントになっています。
              </p>
            </div>

            <div>
              <Image
                src="https://ext.same-assets.com/4205856170/4061585802.jpeg"
                alt="Railway timber"
                width={228}
                height={228}
                className="w-full h-auto mb-2"
              />
              <p className="text-[14px]">
                枕木にはオーストラリアの鉄道で<br/>
                利用された木材を使用しています。
              </p>
            </div>

            <div>
              <Image
                src="https://ext.same-assets.com/4205856170/3775095767.jpeg"
                alt="Glass structure"
                width={228}
                height={228}
                className="w-full h-auto mb-2"
              />
              <p className="text-[14px]">
                らせん状で不規則な構造のため、ガラスは1枚1枚が異なった形をしてます。
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-6 text-center text-[15px] font-semibold border-t border-gray-200">
          <p className="mb-4">
            MONKEY CAFE<br/>
            MONKEY GALLERY
          </p>

          <p className="mb-4">
            渋谷区猿楽町12-8<br/>
            <a href="#" className="underline">アクセス</a><br/>
            10:00〜19:00<br/>
            不定休
          </p>

          <div className="text-[14px] font-normal space-y-2">
            <p>※展示やイベントなどにより営業日や営業時間が異なる場合もございます。</p>
            <p>※撮影利用や貸切に関しては、全て<a href="#" className="underline">モンキーギャラリー</a>へお問い合わせください。</p>

            <p className="mt-4">
              <a href="#" className="underline">アルバイトスタッフ募集</a>
            </p>

            <p className="mt-4">
              MONKEY CAFE 03-5728-6260（10:00〜19:00）<br/>
              MONKEY GALLERY 03-3464-3766（平日10:00〜18:00）
            </p>

            <p className="mt-4">
              <a href="#" className="underline">お問合せ</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 text-center text-[12px] text-gray-600">
          <p>Copyright ©Super Planning Co., Ltd.</p>
        </div>
      </div>
    </div>
  )
}
