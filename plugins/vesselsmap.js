import Vue from 'vue'
function initialize() {
    var latlng0 = new google.maps.LatLng(39.396419,-47.354112);
    var latlng1 = new google.maps.LatLng(22.46302, 114.4432);
    var latlng2 = new google.maps.LatLng(11.66995, 43.1030);
    var latlng3 = new google.maps.LatLng(24.87504, 57.0029);
    var latlng4 = new google.maps.LatLng(31.56111, 31.7416);
    var latlng5 = new google.maps.LatLng(35.80352, 121.2567);
    var latlng6 = new google.maps.LatLng(38.26632, -124.5294);
    var latlng7 = new google.maps.LatLng(20.74773, -86.7937);
    var latlng8 = new google.maps.LatLng(33.75379, -118.2346);
    var latlng9 = new google.maps.LatLng(54.28518, -130.3613);
    var latlng10 = new google.maps.LatLng(8.36527, -79.441);
    var latlng11 = new google.maps.LatLng(3.75717, 8.05);
    var latlng12 = new google.maps.LatLng(53.55686, 8.1692);
    var latlng13 = new google.maps.LatLng(37.63628, 9.0272);
    var latlng14 = new google.maps.LatLng(36.76407, 3.0660);
    var latlng15 = new google.maps.LatLng(43.2552, 4.9977);
    var latlng16 = new google.maps.LatLng(55.55971, 9.749);
    var latlng17 = new google.maps.LatLng(26.15734, 56.7681);
    var latlng18 = new google.maps.LatLng(22.57008, 116.7948);
    var latlng19 = new google.maps.LatLng(8.82505, 76.3441);
    var latlng20 = new google.maps.LatLng(36.40725, 15.9303);
    var latlng21 = new google.maps.LatLng(16.22036, -85.9750);
    var latlng22 = new google.maps.LatLng(37.45338, -29.4711);
    var latlng23 = new google.maps.LatLng(9.8173, -79.5890);
    var latlng24 = new google.maps.LatLng(43.50361, 10.2920);
    var latlng25 = new google.maps.LatLng(45.07189, 36.6302);
    var latlng26 = new google.maps.LatLng(-4.10503, 39.754);
    var latlng27 = new google.maps.LatLng(20.66626, 38.674);
    var latlng28 = new google.maps.LatLng(8.84758, -79.4848);
    var latlng29 = new google.maps.LatLng(22.23215, 119.9777);
    var latlng30 = new google.maps.LatLng(36.07193, 15.0734);
    var latlng31 = new google.maps.LatLng(38.98843, 117.7788);
    var latlng32 = new google.maps.LatLng(40.34161, -73.7028);
    var latlng33 = new google.maps.LatLng(45.84916, 31.0548);
    var latlng34 = new google.maps.LatLng(37.14106, 126.4785);
    var latlng35 = new google.maps.LatLng(5.8245, 80.1701);
    var latlng36 = new google.maps.LatLng(22.74287, 69.7139);
    var latlng37 = new google.maps.LatLng(9.74935, -79.6257);
    var latlng38 = new google.maps.LatLng(40.68503, 28.7178);
    var latlng39 = new google.maps.LatLng(2.82934, 100.9944);
    var latlng40 = new google.maps.LatLng(19.87269, -18.0494);
    var latlng41 = new google.maps.LatLng(1.27701, 103.5466);
    var latlng42 = new google.maps.LatLng(29.92416, 122.1231);
    var latlng43 = new google.maps.LatLng(5.51001, 0.5718);
    var latlng44 = new google.maps.LatLng(9.79448, -79.6214);
    var latlng45 = new google.maps.LatLng(-33.42341, 17.5404);
    var latlng46 = new google.maps.LatLng(37.00783, 126.3279);
    var latlng47 = new google.maps.LatLng(10.13484, -16.6435);
    var latlng48 = new google.maps.LatLng(25.53113, 56.6879);
    var latlng49 = new google.maps.LatLng(-34.78265, 18.9204);
    var latlng50 = new google.maps.LatLng(-19.91417, 56.7471);
    var latlng51 = new google.maps.LatLng(8.45141, -79.4567);
    var latlng52 = new google.maps.LatLng(45.12152, 36.6547);
    var latlng53 = new google.maps.LatLng(5.4956, 0.4700);
    var latlng54 = new google.maps.LatLng(11.602, 43.1028);
    var latlng55 = new google.maps.LatLng(47.56726, -52.7018);
    var latlng56 = new google.maps.LatLng(5.54916, 0.4875);
    var latlng57 = new google.maps.LatLng(37.98093, -24.1409);
    var latlng58 = new google.maps.LatLng(1.29313, 104.3374);
    var latlng59 = new google.maps.LatLng(-31.50463, 16.7900);
    var latlng60 = new google.maps.LatLng(44.34416, -62.5308);
    var latlng61 = new google.maps.LatLng(4.79527, 114.173);
    var latlng62 = new google.maps.LatLng(21.57908, 113.8329);
    var latlng63 = new google.maps.LatLng(8.44712, -79.4550);
    var latlng64 = new google.maps.LatLng(-34.72028, 18.8507);
    var latlng65 = new google.maps.LatLng(51.03549, 2.2640);
    var latlng66 = new google.maps.LatLng(1.35191, 103.5472);
    var latlng67 = new google.maps.LatLng(-33.05301, 17.4841);
    var latlng68 = new google.maps.LatLng(35.94157, -5.7595);
    var latlng69 = new google.maps.LatLng(29.97482, 121.7682);
    var latlng70 = new google.maps.LatLng(47.48915, -52.3426);
    var latlng71 = new google.maps.LatLng(40.71483, 29.462);
    var latlng72 = new google.maps.LatLng(-33.07207, 17.6165);
    var latlng73 = new google.maps.LatLng(-11.1697, 121.3114);
    var latlng74 = new google.maps.LatLng(40.41291, -73.7872);
    var latlng75 = new google.maps.LatLng(47.56809, -52.1779);
    var latlng76 = new google.maps.LatLng(11.59733, 43.1082);
    var latlng77 = new google.maps.LatLng(10.73799, -61.7604);
    var latlng78 = new google.maps.LatLng(32.24132, 31.9093);
    var latlng79 = new google.maps.LatLng(47.55506, -52.1727);
    var latlng80 = new google.maps.LatLng(1.27079, 104.1950);
    var latlng81 = new google.maps.LatLng(31.69687, 32.6043);
    var latlng82 = new google.maps.LatLng(39.95508, 0.0225);
    var latlng83 = new google.maps.LatLng(39.00656, 121.6898);
    var latlng84 = new google.maps.LatLng(29.73275, 122.8343);
    var latlng85 = new google.maps.LatLng(29.78032, 122.0725);
    var latlng86 = new google.maps.LatLng(59.78267, 24.3618);
    var latlng87 = new google.maps.LatLng(30.55839, 122.1962);
    var latlng88 = new google.maps.LatLng(1.32221, 103.5565);
    var latlng89 = new google.maps.LatLng(56.947, 11.7738);
    var latlng90 = new google.maps.LatLng(22.56495, 114.3056);
    var latlng91 = new google.maps.LatLng(44.79616, -8.7908);
    var latlng92 = new google.maps.LatLng(37.15782, -9.6524);
    var latlng93 = new google.maps.LatLng(36.50853, -75.4133);
    var latlng94 = new google.maps.LatLng(55.7224, 4.8012);
    var latlng95 = new google.maps.LatLng(56.70227, -2.4678);
    var latlng96 = new google.maps.LatLng(27.86525, -79.1487);
    var latlng97 = new google.maps.LatLng(57.19289, 1.9103);
    var latlng98 = new google.maps.LatLng(36.65604, -75.5804);
    var latlng99 = new google.maps.LatLng(19.38605, -92.3466);
    var latlng100 = new google.maps.LatLng(-33.20543, 17.5000);
    var latlng101 = new google.maps.LatLng(21.87365, -89.8915);
    var latlng102 = new google.maps.LatLng(29.68025, -95.0065);
    var latlng103 = new google.maps.LatLng(1.12289, -94.647);
    var latlng104 = new google.maps.LatLng(5.51349, 0.3832);
    var latlng105 = new google.maps.LatLng(32.13978, -81.1432);
    var latlng106 = new google.maps.LatLng(36.56706, -10.0531);
    var latlng107 = new google.maps.LatLng(38.08558, -9.6410);
    var latlng108 = new google.maps.LatLng(-35.12536, -56.1250);
    var latlng109 = new google.maps.LatLng(35.32381, -6.6353);
    var latlng110 = new google.maps.LatLng(-25.49995, -48.4953);
    var latlng111 = new google.maps.LatLng(-34.3332, 18.0605);
    var latlng112 = new google.maps.LatLng(-34.81821, 18.8081);
    var latlng113 = new google.maps.LatLng(16.31203, -20.7055);
    var latlng114 = new google.maps.LatLng(49.74295, -7.0901);
    var latlng115 = new google.maps.LatLng(41.13114, -10.6384);
    var latlng116 = new google.maps.LatLng(28.83958, -93.9657);
    var latlng117 = new google.maps.LatLng(-23.96425, -46.2936);
    var latlng118 = new google.maps.LatLng(47.56948, -52.6955);
    var latlng119 = new google.maps.LatLng(21.25428, -85.6831);
    var latlng120 = new google.maps.LatLng(34.37449, -17.8616);
    var latlng121 = new google.maps.LatLng(8.44659, -79.4529);
    var latlng122 = new google.maps.LatLng(47.56814, -52.6970);
    var latlng123 = new google.maps.LatLng(9.3615, -79.8847);
    var latlng124 = new google.maps.LatLng(11.24202, -74.2784);
    var latlng125 = new google.maps.LatLng(37.0763, -26.1456);
    var latlng126 = new google.maps.LatLng(38.72975, -30.634);
    var latlng127 = new google.maps.LatLng(53.59122, 8.5230);
    var latlng128 = new google.maps.LatLng(-7.76206, 12.557);
    var latlng129 = new google.maps.LatLng(39.88785, -30.7110);
    var latlng130 = new google.maps.LatLng(31.92986, -80.6940);
    var latlng131 = new google.maps.LatLng(34.46535, -17.2077);
    var latlng132 = new google.maps.LatLng(36.52793, -6.2800);
    var latlng133 = new google.maps.LatLng(51.03384, 1.593);
    var latlng134 = new google.maps.LatLng(-32.52599, 17.0518);
    var latlng135 = new google.maps.LatLng(46.64937, -71.7602);
    var latlng136 = new google.maps.LatLng(47.77261, -54.0189);
    var latlng137 = new google.maps.LatLng(35.28468, -7.0530);
    var latlng138 = new google.maps.LatLng(3.52358, 9.0558);
    var latlng139 = new google.maps.LatLng(-6.05026, 12.408);
    var latlng140 = new google.maps.LatLng(8.45573, -79.4519);
    var latlng141 = new google.maps.LatLng(36.54564, -0.5028);
    var latlng142 = new google.maps.LatLng(26.23649, -78.3061);
    var latlng143 = new google.maps.LatLng(28.2255, -92.9206);
    var latlng144 = new google.maps.LatLng(-8.78521, 13.2729);
    var latlng145 = new google.maps.LatLng(36.16937, -9.9977);
    var latlng146 = new google.maps.LatLng(-29.9745, 31.0859);
    var latlng147 = new google.maps.LatLng(-24.23782, -46.2707);
    var latlng148 = new google.maps.LatLng(36.46912, -0.4447);
    var latlng149 = new google.maps.LatLng(28.06817, -16.4911);
    var latlng150 = new google.maps.LatLng(9.81573, -79.6800);
    var latlng151 = new google.maps.LatLng(8.45027, -79.455);
    var latlng152 = new google.maps.LatLng(38.28589, -76.2844);
    var latlng153 = new google.maps.LatLng(26.0946, -78.361);
    var latlng154 = new google.maps.LatLng(3.38827, 9.3272);
    var latlng155 = new google.maps.LatLng(12.89067, -18.2129);
    var latlng156 = new google.maps.LatLng(21.90696, -85.7740);
    var latlng157 = new google.maps.LatLng(-23.068, -42.8247);
    var latlng158 = new google.maps.LatLng(46.73965, -127.9975);
    var latlng159 = new google.maps.LatLng(-21.88433, -40.5834);
    var latlng160 = new google.maps.LatLng(-34.70907, 19.0789);
    var latlng161 = new google.maps.LatLng(32.62532, -78.816);
    var latlng162 = new google.maps.LatLng(36.97059, -76.4327);
    var latlng163 = new google.maps.LatLng(28.8627, -90.0891);
    var latlng164 = new google.maps.LatLng(-34.91675, 18.8325);
    var latlng165 = new google.maps.LatLng(-23.12397, -42.8197);
    var latlng166 = new google.maps.LatLng(4.5094, -3.2119);
    var latlng167 = new google.maps.LatLng(37.15052, -76.1498);
    var latlng168 = new google.maps.LatLng(-32.894, 16.7993);
    var latlng169 = new google.maps.LatLng(3.51604, 8.512);
    var latlng170 = new google.maps.LatLng(35.73934, -6.4242);
    var latlng171 = new google.maps.LatLng(33.458, -56.10);
    var latlng172 = new google.maps.LatLng(33.970, -54.08);
    var latlng173 = new google.maps.LatLng(33.806, -52.87);
    var latlng174 = new google.maps.LatLng(34.352, -51.16);
    var latlng175 = new google.maps.LatLng(34.533, -49.07);
    var latlng176 = new google.maps.LatLng(34.912, -48.15);
    var latlng177 = new google.maps.LatLng(35.398, -46.52);
    var latlng178 = new google.maps.LatLng(35.986, -45.12);
    var latlng179 = new google.maps.LatLng(36.199, -44.26);
    var latlng180 = new google.maps.LatLng(36.536, -44.15);
    var latlng181 = new google.maps.LatLng(35.57692, -42.35229);
    var latlng182 = new google.maps.LatLng(32.3219, -69.51029);
    var latlng183 = new google.maps.LatLng(27.99314, -64.69186);
    var latlng184 = new google.maps.LatLng(25.28170, -60.05189);
    var latlng185 = new google.maps.LatLng(28.46484, -61.12261);
    var latlng186 = new google.maps.LatLng(31.09760, -60.94419);
    var latlng187 = new google.maps.LatLng(29.24635, -59.33805);
    var latlng188 = new google.maps.LatLng(31.25029, -60.40881);
    var latlng189 = new google.maps.LatLng(26.75519, -58.08883);
    var latlng190 = new google.maps.LatLng(24.30967, -54.69808);
    var latlng191 = new google.maps.LatLng(31.40274, -57.91037);
    var latlng192 = new google.maps.LatLng(33.65937, -59.33805);
    var latlng193 = new google.maps.LatLng(28.46484, -39.35050);
    var latlng194 = new google.maps.LatLng(37.71616, -36.13821);
    var latlng195 = new google.maps.LatLng(32.46289, -31.31978);
    var latlng196 = new google.maps.LatLng(37.29144, -33.81823);
    var latlng197 = new google.maps.LatLng(33.80778, -26.14443);
    var latlng198 = new google.maps.LatLng(38.83690, -22.21831);
    var latlng199 = new google.maps.LatLng(30.33048, -59.87343);
    var latlng200 = new google.maps.LatLng(31.25029, -57.73191);
    var latlng_cars0 = new google.maps.LatLng(36.235822, -33.983368);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: latlng0,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var pinColorBase = "FFFFFF";
    var pinColorAberto = "0000FF";
    var pinColorConcluido = "00FF00";
    var pinColorCancelado = "FF0000";
    var pinColorTrafo = "FFFF00";
    var pinColorRural = "FF00F0";
    var pinColorResidencial = "00FFFF";
    var pinColorComercial = "FF0000";
    var pinColorIndustrial = "00FF00";
    var pinColorPoderPublico = "0000FF";
    var pinColorNULL = "F00FFF";
    var pinImageCar = new google.maps.MarkerImage("images/radius.jpg",
        new google.maps.Size(42, 68),
        new google.maps.Point(0,0),
        new google.maps.Point(20, 68));

    var pinImageBase = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorBase,
        new google.maps.Size(42, 68),
        new google.maps.Point(0,0),
        new google.maps.Point(20, 68));

    var pinImageAberto = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorAberto,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var pinImageConcluido = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorConcluido,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var pinImageCancelado = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorCancelado,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var pinImageNULL = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorNULL,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var pinImageTrafo = new google.maps.MarkerImage("http://icons.iconarchive.com/icons/iconsmind/outline/16/Communication-Tower-2-icon.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(21, 34));

    var pinImageTrafoDisponivel = new google.maps.MarkerImage("images/trafo_disponivel.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(21, 34));

    var pinImageTrafoConcluido = new google.maps.MarkerImage("images/trafo_concluido.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(21, 34));

    var pinImageTrafoInstConcluido = new google.maps.MarkerImage("images/trafo_inst_conc.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(21, 34));

    var pinImageTrafoInstCancelado = new google.maps.MarkerImage("images/trafo_inst_canc.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(21, 34));

    var pinImageTrafoCancelado = new google.maps.MarkerImage("images/trafo_cancelado.png",
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

    var pinImageRural = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorRural,
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageRuralDisponivel = new google.maps.MarkerImage("images/rural_disponivel.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageRuralConcluido = new google.maps.MarkerImage("images/rural_concluido.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageRuralInstConcluido = new google.maps.MarkerImage("images/rural_inst_conc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageRuralInstCancelado = new google.maps.MarkerImage("images/rural_inst_canc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageRuralCancelado = new google.maps.MarkerImage("images/rural_cancelado.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencial = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorResidencial,
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencialDisponivel = new google.maps.MarkerImage("images/residencial_disponivel.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencialConcluido = new google.maps.MarkerImage("images/residencial_concluido.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencialInstConcluido = new google.maps.MarkerImage("images/residencial_inst_conc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencialInstCancelado = new google.maps.MarkerImage("images/residencial_inst_canc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageResidencialCancelado = new google.maps.MarkerImage("images/residencial_cancelado.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrial = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorIndustrial,
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrialDisponivel = new google.maps.MarkerImage("images/industrial_disponivel.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrialConcluido = new google.maps.MarkerImage("images/industrial_concluido.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrialInstConcluido = new google.maps.MarkerImage("images/industrial_inst_conc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrialInstCancelado = new google.maps.MarkerImage("images/industrial_inst_canc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageIndustrialCancelado = new google.maps.MarkerImage("images/industrial_cancelado.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercial = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorComercial,
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercialDisponivel = new google.maps.MarkerImage("images/comercial_disponivel.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercialConcluido = new google.maps.MarkerImage("images/comercial_concluido.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercialInstConcluido = new google.maps.MarkerImage("images/comercial_inst_conc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercialInstCancelado = new google.maps.MarkerImage("images/comercial_inst_canc.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageComercialCancelado = new google.maps.MarkerImage("images/comercial_cancelado.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(32, 32));

    var pinImageServicoPublico = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColorPoderPublico,
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var pinImageServicoPublicoDisponivel = new google.maps.MarkerImage("images/servico_publico_disponivel.png",
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var pinImageServicoPublicoConcluido = new google.maps.MarkerImage("images/servico_publico_concluido.png",
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var pinImageServicoPublicoInstConcluido = new google.maps.MarkerImage("images/servico_publico_inst_conc.png",
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var pinImageServicoPublicoInstCancelado = new google.maps.MarkerImage("images/servico_publico_inst_canc.png",
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var pinImageServicoPublicoCancelado = new google.maps.MarkerImage("images/servico_publico_cancelado.png",
        new google.maps.Size(24, 24),
        new google.maps.Point(0,0),
        new google.maps.Point(24, 24));

    var marker1 = new google.maps.Marker({
        position: latlng1,
        map: map,
        title: "Navio: ABERDEEN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker1, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ABERDEEN' + '<br />Latitude: ' + latlng1.lat() + '<br />Longitude: ' + latlng1.lng()
        });
        infoWindow.open(map, marker1);
    });
    var marker2 = new google.maps.Marker({
        position: latlng2,
        map: map,
        title: "Navio: ADRIATIC",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker2, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ADRIATIC' + '<br />Latitude: ' + latlng2.lat() + '<br />Longitude: ' + latlng2.lng()
        });
        infoWindow.open(map, marker2);
    });
    var marker3 = new google.maps.Marker({
        position: latlng3,
        map: map,
        title: "Navio: AEGEAN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker3, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: AEGEAN' + '<br />Latitude: ' + latlng3.lat() + '<br />Longitude: ' + latlng3.lng()
        });
        infoWindow.open(map, marker3);
    });
    var marker4 = new google.maps.Marker({
        position: latlng4,
        map: map,
        title: "Navio: AHRAM",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker4, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: AHRAM' + '<br />Latitude: ' + latlng4.lat() + '<br />Longitude: ' + latlng4.lng()
        });
        infoWindow.open(map, marker4);
    });
    var marker5 = new google.maps.Marker({
        position: latlng5,
        map: map,
        title: "Navio: ALFIRK",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker5, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ALFIRK' + '<br />Latitude: ' + latlng5.lat() + '<br />Longitude: ' + latlng5.lng()
        });
        infoWindow.open(map, marker5);
    });
    var marker6 = new google.maps.Marker({
        position: latlng6,
        map: map,
        title: "Navio: ALGOL",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker6, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ALGOL' + '<br />Latitude: ' + latlng6.lat() + '<br />Longitude: ' + latlng6.lng()
        });
        infoWindow.open(map, marker6);
    });
    var marker7 = new google.maps.Marker({
        position: latlng7,
        map: map,
        title: "Navio: ALLURE OF THE SEAS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker7, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ALLURE OF THE SEAS' + '<br />Latitude: ' + latlng7.lat() + '<br />Longitude: ' + latlng7.lng()
        });
        infoWindow.open(map, marker7);
    });
    var marker8 = new google.maps.Marker({
        position: latlng8,
        map: map,
        title: "Navio: ALTAIR",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker8, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ALTAIR' + '<br />Latitude: ' + latlng8.lat() + '<br />Longitude: ' + latlng8.lng()
        });
        infoWindow.open(map, marker8);
    });
    var marker9 = new google.maps.Marker({
        position: latlng9,
        map: map,
        title: "Navio: ANTARES",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker9, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ANTARES' + '<br />Latitude: ' + latlng9.lat() + '<br />Longitude: ' + latlng9.lng()
        });
        infoWindow.open(map, marker9);
    });
    var marker10 = new google.maps.Marker({
        position: latlng10,
        map: map,
        title: "Navio: ARAS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker10, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ARAS' + '<br />Latitude: ' + latlng10.lat() + '<br />Longitude: ' + latlng10.lng()
        });
        infoWindow.open(map, marker10);
    });
    var marker11 = new google.maps.Marker({
        position: latlng11,
        map: map,
        title: "Navio: ARCHIEVER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker11, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ARCHIEVER' + '<br />Latitude: ' + latlng11.lat() + '<br />Longitude: ' + latlng11.lng()
        });
        infoWindow.open(map, marker11);
    });
    var marker12 = new google.maps.Marker({
        position: latlng12,
        map: map,
        title: "Navio: ARCTIC",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker12, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ARCTIC' + '<br />Latitude: ' + latlng12.lat() + '<br />Longitude: ' + latlng12.lng()
        });
        infoWindow.open(map, marker12);
    });
    var marker13 = new google.maps.Marker({
        position: latlng13,
        map: map,
        title: "Navio: ARIZONA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker13, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ARIZONA' + '<br />Latitude: ' + latlng13.lat() + '<br />Longitude: ' + latlng13.lng()
        });
        infoWindow.open(map, marker13);
    });
    var marker14 = new google.maps.Marker({
        position: latlng14,
        map: map,
        title: "Navio: ARKANSAS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker14, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ARKANSAS' + '<br />Latitude: ' + latlng14.lat() + '<br />Longitude: ' + latlng14.lng()
        });
        infoWindow.open(map, marker14);
    });
    var marker15 = new google.maps.Marker({
        position: latlng15,
        map: map,
        title: "Navio: ARUN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker15, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ARUN' + '<br />Latitude: ' + latlng15.lat() + '<br />Longitude: ' + latlng15.lng()
        });
        infoWindow.open(map, marker15);
    });
    var marker16 = new google.maps.Marker({
        position: latlng16,
        map: map,
        title: "Navio: ASSERTER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker16, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ASSERTER' + '<br />Latitude: ' + latlng16.lat() + '<br />Longitude: ' + latlng16.lng()
        });
        infoWindow.open(map, marker16);
    });
    var marker17 = new google.maps.Marker({
        position: latlng17,
        map: map,
        title: "Navio: ATLANTA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker17, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ATLANTA' + '<br />Latitude: ' + latlng17.lat() + '<br />Longitude: ' + latlng17.lng()
        });
        infoWindow.open(map, marker17);
    });
    var marker18 = new google.maps.Marker({
        position: latlng18,
        map: map,
        title: "Navio: ATLANTIC",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker18, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ATLANTIC' + '<br />Latitude: ' + latlng18.lat() + '<br />Longitude: ' + latlng18.lng()
        });
        infoWindow.open(map, marker18);
    });
    var marker19 = new google.maps.Marker({
        position: latlng19,
        map: map,
        title: "Navio: AVON",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker19, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: AVON' + '<br />Latitude: ' + latlng19.lat() + '<br />Longitude: ' + latlng19.lng()
        });
        infoWindow.open(map, marker19);
    });
    var marker20 = new google.maps.Marker({
        position: latlng20,
        map: map,
        title: "Navio: BALI",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker20, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BALI' + '<br />Latitude: ' + latlng20.lat() + '<br />Longitude: ' + latlng20.lng()
        });
        infoWindow.open(map, marker20);
    });
    var marker21 = new google.maps.Marker({
        position: latlng21,
        map: map,
        title: "Navio: BARRI",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker21, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BARRI' + '<br />Latitude: ' + latlng21.lat() + '<br />Longitude: ' + latlng21.lng()
        });
        infoWindow.open(map, marker21);
    });
    var marker22 = new google.maps.Marker({
        position: latlng22,
        map: map,
        title: "Navio: BATAM",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker22, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BATAM' + '<br />Latitude: ' + latlng22.lat() + '<br />Longitude: ' + latlng22.lng()
        });
        infoWindow.open(map, marker22);
    });
    var marker23 = new google.maps.Marker({
        position: latlng23,
        map: map,
        title: "Navio: BATUR",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker23, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BATUR' + '<br />Latitude: ' + latlng23.lat() + '<br />Longitude: ' + latlng23.lng()
        });
        infoWindow.open(map, marker23);
    });
    var marker24 = new google.maps.Marker({
        position: latlng24,
        map: map,
        title: "Navio: BEAUFORT",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker24, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BEAUFORT' + '<br />Latitude: ' + latlng24.lat() + '<br />Longitude: ' + latlng24.lng()
        });
        infoWindow.open(map, marker24);
    });
    var marker25 = new google.maps.Marker({
        position: latlng25,
        map: map,
        title: "Navio: BELFAST",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker25, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BELFAST' + '<br />Latitude: ' + latlng25.lat() + '<br />Longitude: ' + latlng25.lng()
        });
        infoWindow.open(map, marker25);
    });
    var marker26 = new google.maps.Marker({
        position: latlng26,
        map: map,
        title: "Navio: BENTOVILLE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker26, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BENTOVILLE' + '<br />Latitude: ' + latlng26.lat() + '<br />Longitude: ' + latlng26.lng()
        });
        infoWindow.open(map, marker26);
    });
    var marker27 = new google.maps.Marker({
        position: latlng27,
        map: map,
        title: "Navio: BERING",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker27, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BERING' + '<br />Latitude: ' + latlng27.lat() + '<br />Longitude: ' + latlng27.lng()
        });
        infoWindow.open(map, marker27);
    });
    var marker28 = new google.maps.Marker({
        position: latlng28,
        map: map,
        title: "Navio: BINTAN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker28, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BINTAN' + '<br />Latitude: ' + latlng28.lat() + '<br />Longitude: ' + latlng28.lng()
        });
        infoWindow.open(map, marker28);
    });
    var marker29 = new google.maps.Marker({
        position: latlng29,
        map: map,
        title: "Navio: BINTULU",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker29, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BINTULU' + '<br />Latitude: ' + latlng29.lat() + '<br />Longitude: ' + latlng29.lng()
        });
        infoWindow.open(map, marker29);
    });
    var marker30 = new google.maps.Marker({
        position: latlng30,
        map: map,
        title: "Navio: BOGOR",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker30, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BOGOR' + '<br />Latitude: ' + latlng30.lat() + '<br />Longitude: ' + latlng30.lng()
        });
        infoWindow.open(map, marker30);
    });
    var marker31 = new google.maps.Marker({
        position: latlng31,
        map: map,
        title: "Navio: BORNEO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker31, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BORNEO' + '<br />Latitude: ' + latlng31.lat() + '<br />Longitude: ' + latlng31.lng()
        });
        infoWindow.open(map, marker31);
    });
    var marker32 = new google.maps.Marker({
        position: latlng32,
        map: map,
        title: "Navio: BRANI",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker32, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BRANI' + '<br />Latitude: ' + latlng32.lat() + '<br />Longitude: ' + latlng32.lng()
        });
        infoWindow.open(map, marker32);
    });
    var marker33 = new google.maps.Marker({
        position: latlng33,
        map: map,
        title: "Navio: BRATAN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker33, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BRATAN' + '<br />Latitude: ' + latlng33.lat() + '<br />Longitude: ' + latlng33.lng()
        });
        infoWindow.open(map, marker33);
    });
    var marker34 = new google.maps.Marker({
        position: latlng34,
        map: map,
        title: "Navio: BRIGIT",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker34, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BRIGIT' + '<br />Latitude: ' + latlng34.lat() + '<br />Longitude: ' + latlng34.lng()
        });
        infoWindow.open(map, marker34);
    });
    var marker35 = new google.maps.Marker({
        position: latlng35,
        map: map,
        title: "Navio: BRISTOL",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker35, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BRISTOL' + '<br />Latitude: ' + latlng35.lat() + '<br />Longitude: ' + latlng35.lng()
        });
        infoWindow.open(map, marker35);
    });
    var marker36 = new google.maps.Marker({
        position: latlng36,
        map: map,
        title: "Navio: BROOKLING",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker36, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BROOKLING' + '<br />Latitude: ' + latlng36.lat() + '<br />Longitude: ' + latlng36.lng()
        });
        infoWindow.open(map, marker36);
    });
    var marker37 = new google.maps.Marker({
        position: latlng37,
        map: map,
        title: "Navio: BULAN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker37, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BULAN' + '<br />Latitude: ' + latlng37.lat() + '<br />Longitude: ' + latlng37.lng()
        });
        infoWindow.open(map, marker37);
    });
    var marker38 = new google.maps.Marker({
        position: latlng38,
        map: map,
        title: "Navio: BUTON",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker38, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: BUTON' + '<br />Latitude: ' + latlng38.lat() + '<br />Longitude: ' + latlng38.lng()
        });
        infoWindow.open(map, marker38);
    });
    var marker39 = new google.maps.Marker({
        position: latlng39,
        map: map,
        title: "Navio: CABINDA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker39, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CABINDA' + '<br />Latitude: ' + latlng39.lat() + '<br />Longitude: ' + latlng39.lng()
        });
        infoWindow.open(map, marker39);
    });
    var marker40 = new google.maps.Marker({
        position: latlng40,
        map: map,
        title: "Navio: CABO VERDE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker40, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CABO VERDE' + '<br />Latitude: ' + latlng40.lat() + '<br />Longitude: ' + latlng40.lng()
        });
        infoWindow.open(map, marker40);
    });
    var marker41 = new google.maps.Marker({
        position: latlng41,
        map: map,
        title: "Navio: CADIZ",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker41, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CADIZ' + '<br />Latitude: ' + latlng41.lat() + '<br />Longitude: ' + latlng41.lng()
        });
        infoWindow.open(map, marker41);
    });
    var marker42 = new google.maps.Marker({
        position: latlng42,
        map: map,
        title: "Navio: CAIRO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker42, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CAIRO' + '<br />Latitude: ' + latlng42.lat() + '<br />Longitude: ' + latlng42.lng()
        });
        infoWindow.open(map, marker42);
    });
    var marker43 = new google.maps.Marker({
        position: latlng43,
        map: map,
        title: "Navio: CALABAR",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker43, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CALABAR' + '<br />Latitude: ' + latlng43.lat() + '<br />Longitude: ' + latlng43.lng()
        });
        infoWindow.open(map, marker43);
    });
    var marker44 = new google.maps.Marker({
        position: latlng44,
        map: map,
        title: "Navio: CALLAO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker44, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CALLAO' + '<br />Latitude: ' + latlng44.lat() + '<br />Longitude: ' + latlng44.lng()
        });
        infoWindow.open(map, marker44);
    });
    var marker45 = new google.maps.Marker({
        position: latlng45,
        map: map,
        title: "Navio: CAMEROUN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker45, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CAMEROUN' + '<br />Latitude: ' + latlng45.lat() + '<br />Longitude: ' + latlng45.lng()
        });
        infoWindow.open(map, marker45);
    });
    var marker46 = new google.maps.Marker({
        position: latlng46,
        map: map,
        title: "Navio: CANCUN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker46, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CANCUN' + '<br />Latitude: ' + latlng46.lat() + '<br />Longitude: ' + latlng46.lng()
        });
        infoWindow.open(map, marker46);
    });
    var marker47 = new google.maps.Marker({
        position: latlng47,
        map: map,
        title: "Navio: CAPE COAST",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker47, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CAPE COAST' + '<br />Latitude: ' + latlng47.lat() + '<br />Longitude: ' + latlng47.lng()
        });
        infoWindow.open(map, marker47);
    });
    var marker48 = new google.maps.Marker({
        position: latlng48,
        map: map,
        title: "Navio: CAPRI",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker48, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CAPRI' + '<br />Latitude: ' + latlng48.lat() + '<br />Longitude: ' + latlng48.lng()
        });
        infoWindow.open(map, marker48);
    });
    var marker49 = new google.maps.Marker({
        position: latlng49,
        map: map,
        title: "Navio: CARDIFF",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker49, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CARDIFF' + '<br />Latitude: ' + latlng49.lat() + '<br />Longitude: ' + latlng49.lng()
        });
        infoWindow.open(map, marker49);
    });
    var marker50 = new google.maps.Marker({
        position: latlng50,
        map: map,
        title: "Navio: CASABLANCA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker50, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CASABLANCA' + '<br />Latitude: ' + latlng50.lat() + '<br />Longitude: ' + latlng50.lng()
        });
        infoWindow.open(map, marker50);
    });
    var marker51 = new google.maps.Marker({
        position: latlng51,
        map: map,
        title: "Navio: CAYMAN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker51, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CAYMAN' + '<br />Latitude: ' + latlng51.lat() + '<br />Longitude: ' + latlng51.lng()
        });
        infoWindow.open(map, marker51);
    });
    var marker52 = new google.maps.Marker({
        position: latlng52,
        map: map,
        title: "Navio: CEBU",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker52, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CEBU' + '<br />Latitude: ' + latlng52.lat() + '<br />Longitude: ' + latlng52.lng()
        });
        infoWindow.open(map, marker52);
    });
    var marker53 = new google.maps.Marker({
        position: latlng53,
        map: map,
        title: "Navio: CHENNAI",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker53, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CHENNAI' + '<br />Latitude: ' + latlng53.lat() + '<br />Longitude: ' + latlng53.lng()
        });
        infoWindow.open(map, marker53);
    });
    var marker54 = new google.maps.Marker({
        position: latlng54,
        map: map,
        title: "Navio: CHICAGO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker54, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CHICAGO' + '<br />Latitude: ' + latlng54.lat() + '<br />Longitude: ' + latlng54.lng()
        });
        infoWindow.open(map, marker54);
    });
    var marker55 = new google.maps.Marker({
        position: latlng55,
        map: map,
        title: "Navio: CLIPPER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker55, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CLIPPER' + '<br />Latitude: ' + latlng55.lat() + '<br />Longitude: ' + latlng55.lng()
        });
        infoWindow.open(map, marker55);
    });
    var marker56 = new google.maps.Marker({
        position: latlng56,
        map: map,
        title: "Navio: COLOMBO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker56, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: COLOMBO' + '<br />Latitude: ' + latlng56.lat() + '<br />Longitude: ' + latlng56.lng()
        });
        infoWindow.open(map, marker56);
    });
    var marker57 = new google.maps.Marker({
        position: latlng57,
        map: map,
        title: "Navio: COLUMBUS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker57, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: COLUMBUS' + '<br />Latitude: ' + latlng57.lat() + '<br />Longitude: ' + latlng57.lng()
        });
        infoWindow.open(map, marker57);
    });
    var marker58 = new google.maps.Marker({
        position: latlng58,
        map: map,
        title: "Navio: CONAKRI",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker58, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CONAKRI' + '<br />Latitude: ' + latlng58.lat() + '<br />Longitude: ' + latlng58.lng()
        });
        infoWindow.open(map, marker58);
    });
    var marker59 = new google.maps.Marker({
        position: latlng59,
        map: map,
        title: "Navio: CONGO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker59, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CONGO' + '<br />Latitude: ' + latlng59.lat() + '<br />Longitude: ' + latlng59.lng()
        });
        infoWindow.open(map, marker59);
    });
    var marker60 = new google.maps.Marker({
        position: latlng60,
        map: map,
        title: "Navio: CONNECTOR",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker60, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CONNECTOR' + '<br />Latitude: ' + latlng60.lat() + '<br />Longitude: ' + latlng60.lng()
        });
        infoWindow.open(map, marker60);
    });
    var marker61 = new google.maps.Marker({
        position: latlng61,
        map: map,
        title: "Navio: CONVINCER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker61, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CONVINCER' + '<br />Latitude: ' + latlng61.lat() + '<br />Longitude: ' + latlng61.lng()
        });
        infoWindow.open(map, marker61);
    });
    var marker62 = new google.maps.Marker({
        position: latlng62,
        map: map,
        title: "Navio: COPENHAGEN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker62, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: COPENHAGEN' + '<br />Latitude: ' + latlng62.lat() + '<br />Longitude: ' + latlng62.lng()
        });
        infoWindow.open(map, marker62);
    });
    var marker63 = new google.maps.Marker({
        position: latlng63,
        map: map,
        title: "Navio: CORSICA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker63, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CORSICA' + '<br />Latitude: ' + latlng63.lat() + '<br />Longitude: ' + latlng63.lng()
        });
        infoWindow.open(map, marker63);
    });
    var marker64 = new google.maps.Marker({
        position: latlng64,
        map: map,
        title: "Navio: COTONOU",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker64, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: COTONOU' + '<br />Latitude: ' + latlng64.lat() + '<br />Longitude: ' + latlng64.lng()
        });
        infoWindow.open(map, marker64);
    });
    var marker65 = new google.maps.Marker({
        position: latlng65,
        map: map,
        title: "Navio: CRETE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker65, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CRETE' + '<br />Latitude: ' + latlng65.lat() + '<br />Longitude: ' + latlng65.lng()
        });
        infoWindow.open(map, marker65);
    });
    var marker66 = new google.maps.Marker({
        position: latlng66,
        map: map,
        title: "Navio: CUANZA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker66, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CUANZA' + '<br />Latitude: ' + latlng66.lat() + '<br />Longitude: ' + latlng66.lng()
        });
        infoWindow.open(map, marker66);
    });
    var marker67 = new google.maps.Marker({
        position: latlng67,
        map: map,
        title: "Navio: CUBANGO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker67, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CUBANGO' + '<br />Latitude: ' + latlng67.lat() + '<br />Longitude: ' + latlng67.lng()
        });
        infoWindow.open(map, marker67);
    });
    var marker68 = new google.maps.Marker({
        position: latlng68,
        map: map,
        title: "Navio: CUNENE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker68, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CUNENE' + '<br />Latitude: ' + latlng68.lat() + '<br />Longitude: ' + latlng68.lng()
        });
        infoWindow.open(map, marker68);
    });
    var marker69 = new google.maps.Marker({
        position: latlng69,
        map: map,
        title: "Navio: CURACAO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker69, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CURACAO' + '<br />Latitude: ' + latlng69.lat() + '<br />Longitude: ' + latlng69.lng()
        });
        infoWindow.open(map, marker69);
    });
    var marker70 = new google.maps.Marker({
        position: latlng70,
        map: map,
        title: "Navio: CUTTER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker70, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: CUTTER' + '<br />Latitude: ' + latlng70.lat() + '<br />Longitude: ' + latlng70.lng()
        });
        infoWindow.open(map, marker70);
    });
    var marker71 = new google.maps.Marker({
        position: latlng71,
        map: map,
        title: "Navio: DAKAR",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker71, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DAKAR' + '<br />Latitude: ' + latlng71.lat() + '<br />Longitude: ' + latlng71.lng()
        });
        infoWindow.open(map, marker71);
    });
    var marker72 = new google.maps.Marker({
        position: latlng72,
        map: map,
        title: "Navio: DANUBE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker72, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DANUBE' + '<br />Latitude: ' + latlng72.lat() + '<br />Longitude: ' + latlng72.lng()
        });
        infoWindow.open(map, marker72);
    });
    var marker73 = new google.maps.Marker({
        position: latlng73,
        map: map,
        title: "Navio: DELIVERER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker73, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DELIVERER' + '<br />Latitude: ' + latlng73.lat() + '<br />Longitude: ' + latlng73.lng()
        });
        infoWindow.open(map, marker73);
    });
    var marker74 = new google.maps.Marker({
        position: latlng74,
        map: map,
        title: "Navio: DENVER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker74, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DENVER' + '<br />Latitude: ' + latlng74.lat() + '<br />Longitude: ' + latlng74.lng()
        });
        infoWindow.open(map, marker74);
    });
    var marker75 = new google.maps.Marker({
        position: latlng75,
        map: map,
        title: "Navio: DETECTOR",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker75, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DETECTOR' + '<br />Latitude: ' + latlng75.lat() + '<br />Longitude: ' + latlng75.lng()
        });
        infoWindow.open(map, marker75);
    });
    var marker76 = new google.maps.Marker({
        position: latlng76,
        map: map,
        title: "Navio: DETROIT",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker76, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DETROIT' + '<br />Latitude: ' + latlng76.lat() + '<br />Longitude: ' + latlng76.lng()
        });
        infoWindow.open(map, marker76);
    });
    var marker77 = new google.maps.Marker({
        position: latlng77,
        map: map,
        title: "Navio: DEVELOPER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker77, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DEVELOPER' + '<br />Latitude: ' + latlng77.lat() + '<br />Longitude: ' + latlng77.lng()
        });
        infoWindow.open(map, marker77);
    });
    var marker78 = new google.maps.Marker({
        position: latlng78,
        map: map,
        title: "Navio: DISCOVERER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker78, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DISCOVERER' + '<br />Latitude: ' + latlng78.lat() + '<br />Longitude: ' + latlng78.lng()
        });
        infoWindow.open(map, marker78);
    });
    var marker79 = new google.maps.Marker({
        position: latlng79,
        map: map,
        title: "Navio: DISPATCHER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker79, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DISPATCHER' + '<br />Latitude: ' + latlng79.lat() + '<br />Longitude: ' + latlng79.lng()
        });
        infoWindow.open(map, marker79);
    });
    var marker80 = new google.maps.Marker({
        position: latlng80,
        map: map,
        title: "Navio: DOUALA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker80, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DOUALA' + '<br />Latitude: ' + latlng80.lat() + '<br />Longitude: ' + latlng80.lng()
        });
        infoWindow.open(map, marker80);
    });
    var marker81 = new google.maps.Marker({
        position: latlng81,
        map: map,
        title: "Navio: DURBAN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker81, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: DURBAN' + '<br />Latitude: ' + latlng81.lat() + '<br />Longitude: ' + latlng81.lng()
        });
        infoWindow.open(map, marker81);
    });
    var marker82 = new google.maps.Marker({
        position: latlng82,
        map: map,
        title: "Navio: EDGAR",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker82, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: EDGAR' + '<br />Latitude: ' + latlng82.lat() + '<br />Longitude: ' + latlng82.lng()
        });
        infoWindow.open(map, marker82);
    });
    var marker83 = new google.maps.Marker({
        position: latlng83,
        map: map,
        title: "Navio: EDINBURGH",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker83, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: EDINBURGH' + '<br />Latitude: ' + latlng83.lat() + '<br />Longitude: ' + latlng83.lng()
        });
        infoWindow.open(map, marker83);
    });
    var marker84 = new google.maps.Marker({
        position: latlng84,
        map: map,
        title: "Navio: EDIRNE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker84, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: EDIRNE' + '<br />Latitude: ' + latlng84.lat() + '<br />Longitude: ' + latlng84.lng()
        });
        infoWindow.open(map, marker84);
    });
    var marker85 = new google.maps.Marker({
        position: latlng85,
        map: map,
        title: "Navio: EDMONTON",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker85, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: EDMONTON' + '<br />Latitude: ' + latlng85.lat() + '<br />Longitude: ' + latlng85.lng()
        });
        infoWindow.open(map, marker85);
    });
    var marker86 = new google.maps.Marker({
        position: latlng86,
        map: map,
        title: "Navio: EDWARD",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker86, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: EDWARD' + '<br />Latitude: ' + latlng86.lat() + '<br />Longitude: ' + latlng86.lng()
        });
        infoWindow.open(map, marker86);
    });
    var marker87 = new google.maps.Marker({
        position: latlng87,
        map: map,
        title: "Navio: EINDHOVEN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker87, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: EINDHOVEN' + '<br />Latitude: ' + latlng87.lat() + '<br />Longitude: ' + latlng87.lng()
        });
        infoWindow.open(map, marker87);
    });
    var marker88 = new google.maps.Marker({
        position: latlng88,
        map: map,
        title: "Navio: ELBA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker88, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ELBA' + '<br />Latitude: ' + latlng88.lat() + '<br />Longitude: ' + latlng88.lng()
        });
        infoWindow.open(map, marker88);
    });
    var marker89 = new google.maps.Marker({
        position: latlng89,
        map: map,
        title: "Navio: ELLIOT",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker89, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ELLIOT' + '<br />Latitude: ' + latlng89.lat() + '<br />Longitude: ' + latlng89.lng()
        });
        infoWindow.open(map, marker89);
    });
    var marker90 = new google.maps.Marker({
        position: latlng90,
        map: map,
        title: "Navio: EMDEN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker90, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: EMDEN' + '<br />Latitude: ' + latlng90.lat() + '<br />Longitude: ' + latlng90.lng()
        });
        infoWindow.open(map, marker90);
    });
    var marker91 = new google.maps.Marker({
        position: latlng91,
        map: map,
        title: "Navio: ESSEX",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker91, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ESSEX' + '<br />Latitude: ' + latlng91.lat() + '<br />Longitude: ' + latlng91.lng()
        });
        infoWindow.open(map, marker91);
    });
    var marker92 = new google.maps.Marker({
        position: latlng92,
        map: map,
        title: "Navio: EUREKA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker92, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: EUREKA' + '<br />Latitude: ' + latlng92.lat() + '<br />Longitude: ' + latlng92.lng()
        });
        infoWindow.open(map, marker92);
    });
    var marker93 = new google.maps.Marker({
        position: latlng93,
        map: map,
        title: "Navio: GAIRLOCH",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker93, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: GAIRLOCH' + '<br />Latitude: ' + latlng93.lat() + '<br />Longitude: ' + latlng93.lng()
        });
        infoWindow.open(map, marker93);
    });
    var marker94 = new google.maps.Marker({
        position: latlng94,
        map: map,
        title: "Navio: GUARDIAN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker94, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: GUARDIAN' + '<br />Latitude: ' + latlng94.lat() + '<br />Longitude: ' + latlng94.lng()
        });
        infoWindow.open(map, marker94);
    });
    var marker95 = new google.maps.Marker({
        position: latlng95,
        map: map,
        title: "Navio: HANDLER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker95, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: HANDLER' + '<br />Latitude: ' + latlng95.lat() + '<br />Longitude: ' + latlng95.lng()
        });
        infoWindow.open(map, marker95);
    });
    var marker96 = new google.maps.Marker({
        position: latlng96,
        map: map,
        title: "Navio: HARMONY OF THE SEAS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker96, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: HARMONY OF THE SEAS' + '<br />Latitude: ' + latlng96.lat() + '<br />Longitude: ' + latlng96.lng()
        });
        infoWindow.open(map, marker96);
    });
    var marker97 = new google.maps.Marker({
        position: latlng97,
        map: map,
        title: "Navio: HIGHLANDER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker97, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: HIGHLANDER' + '<br />Latitude: ' + latlng97.lat() + '<br />Longitude: ' + latlng97.lng()
        });
        infoWindow.open(map, marker97);
    });
    var marker98 = new google.maps.Marker({
        position: latlng98,
        map: map,
        title: "Navio: IDAHO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker98, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: IDAHO' + '<br />Latitude: ' + latlng98.lat() + '<br />Longitude: ' + latlng98.lng()
        });
        infoWindow.open(map, marker98);
    });
    var marker99 = new google.maps.Marker({
        position: latlng99,
        map: map,
        title: "Navio: IMPLEMENTER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker99, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: IMPLEMENTER' + '<br />Latitude: ' + latlng99.lat() + '<br />Longitude: ' + latlng99.lng()
        });
        infoWindow.open(map, marker99);
    });
    var marker100 = new google.maps.Marker({
        position: latlng100,
        map: map,
        title: "Navio: INDUS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker100, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: INDUS' + '<br />Latitude: ' + latlng100.lat() + '<br />Longitude: ' + latlng100.lng()
        });
        infoWindow.open(map, marker100);
    });
    var marker101 = new google.maps.Marker({
        position: latlng101,
        map: map,
        title: "Navio: INSTALLER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker101, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: INSTALLER' + '<br />Latitude: ' + latlng101.lat() + '<br />Longitude: ' + latlng101.lng()
        });
        infoWindow.open(map, marker101);
    });
    var marker102 = new google.maps.Marker({
        position: latlng102,
        map: map,
        title: "Navio: IOWA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker102, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: IOWA' + '<br />Latitude: ' + latlng102.lat() + '<br />Longitude: ' + latlng102.lng()
        });
        infoWindow.open(map, marker102);
    });
    var marker103 = new google.maps.Marker({
        position: latlng103,
        map: map,
        title: "Navio: IZMIR",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker103, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: IZMIR' + '<br />Latitude: ' + latlng103.lat() + '<br />Longitude: ' + latlng103.lng()
        });
        infoWindow.open(map, marker103);
    });
    var marker104 = new google.maps.Marker({
        position: latlng104,
        map: map,
        title: "Navio: KATE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker104, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: KATE' + '<br />Latitude: ' + latlng104.lat() + '<br />Longitude: ' + latlng104.lng()
        });
        infoWindow.open(map, marker104);
    });
    var marker105 = new google.maps.Marker({
        position: latlng105,
        map: map,
        title: "Navio: KENSINGTON",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker105, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: KENSINGTON' + '<br />Latitude: ' + latlng105.lat() + '<br />Longitude: ' + latlng105.lng()
        });
        infoWindow.open(map, marker105);
    });
    var marker106 = new google.maps.Marker({
        position: latlng106,
        map: map,
        title: "Navio: KINLOSS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker106, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: KINLOSS' + '<br />Latitude: ' + latlng106.lat() + '<br />Longitude: ' + latlng106.lng()
        });
        infoWindow.open(map, marker106);
    });
    var marker107 = new google.maps.Marker({
        position: latlng107,
        map: map,
        title: "Navio: KOBE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker107, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: KOBE' + '<br />Latitude: ' + latlng107.lat() + '<br />Longitude: ' + latlng107.lng()
        });
        infoWindow.open(map, marker107);
    });
    var marker108 = new google.maps.Marker({
        position: latlng108,
        map: map,
        title: "Navio: LABREA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker108, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: LABREA' + '<br />Latitude: ' + latlng108.lat() + '<br />Longitude: ' + latlng108.lng()
        });
        infoWindow.open(map, marker108);
    });
    var marker109 = new google.maps.Marker({
        position: latlng109,
        map: map,
        title: "Navio: LAMANAI",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker109, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: LAMANAI' + '<br />Latitude: ' + latlng109.lat() + '<br />Longitude: ' + latlng109.lng()
        });
        infoWindow.open(map, marker109);
    });
    var marker110 = new google.maps.Marker({
        position: latlng110,
        map: map,
        title: "Navio: LANCO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker110, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: LANCO' + '<br />Latitude: ' + latlng110.lat() + '<br />Longitude: ' + latlng110.lng()
        });
        infoWindow.open(map, marker110);
    });
    var marker111 = new google.maps.Marker({
        position: latlng111,
        map: map,
        title: "Navio: LAUNCESTON",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker111, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: LAUNCESTON' + '<br />Latitude: ' + latlng111.lat() + '<br />Longitude: ' + latlng111.lng()
        });
        infoWindow.open(map, marker111);
    });
    var marker112 = new google.maps.Marker({
        position: latlng112,
        map: map,
        title: "Navio: LONDRINA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker112, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: LONDRINA' + '<br />Latitude: ' + latlng112.lat() + '<br />Longitude: ' + latlng112.lng()
        });
        infoWindow.open(map, marker112);
    });
    var marker113 = new google.maps.Marker({
        position: latlng113,
        map: map,
        title: "Navio: LOTA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker113, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: LOTA' + '<br />Latitude: ' + latlng113.lat() + '<br />Longitude: ' + latlng113.lng()
        });
        infoWindow.open(map, marker113);
    });
    var marker114 = new google.maps.Marker({
        position: latlng114,
        map: map,
        title: "Navio: MAERSK PALERMO",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker114, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: MAERSK PALERMO' + '<br />Latitude: ' + latlng114.lat() + '<br />Longitude: ' + latlng114.lng()
        });
        infoWindow.open(map, marker114);
    });
    var marker115 = new google.maps.Marker({
        position: latlng115,
        map: map,
        title: "Navio: MAGELLAN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker115, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: MAGELLAN' + '<br />Latitude: ' + latlng115.lat() + '<br />Longitude: ' + latlng115.lng()
        });
        infoWindow.open(map, marker115);
    });
    var marker116 = new google.maps.Marker({
        position: latlng116,
        map: map,
        title: "Navio: MARU",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker116, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: MARU' + '<br />Latitude: ' + latlng116.lat() + '<br />Longitude: ' + latlng116.lng()
        });
        infoWindow.open(map, marker116);
    });
    var marker117 = new google.maps.Marker({
        position: latlng117,
        map: map,
        title: "Navio: MEMPHIS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker117, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: MEMPHIS' + '<br />Latitude: ' + latlng117.lat() + '<br />Longitude: ' + latlng117.lng()
        });
        infoWindow.open(map, marker117);
    });
    var marker118 = new google.maps.Marker({
        position: latlng118,
        map: map,
        title: "Navio: MOBILISER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker118, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: MOBILISER' + '<br />Latitude: ' + latlng118.lat() + '<br />Longitude: ' + latlng118.lng()
        });
        infoWindow.open(map, marker118);
    });
    var marker119 = new google.maps.Marker({
        position: latlng119,
        map: map,
        title: "Navio: MUROTSU",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker119, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: MUROTSU' + '<br />Latitude: ' + latlng119.lat() + '<br />Longitude: ' + latlng119.lng()
        });
        infoWindow.open(map, marker119);
    });
    var marker120 = new google.maps.Marker({
        position: latlng120,
        map: map,
        title: "Navio: NEWCASTLE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker120, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NEWCASTLE' + '<br />Latitude: ' + latlng120.lat() + '<br />Longitude: ' + latlng120.lng()
        });
        infoWindow.open(map, marker120);
    });
    var marker121 = new google.maps.Marker({
        position: latlng121,
        map: map,
        title: "Navio: NEWHAVEN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker121, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NEWHAVEN' + '<br />Latitude: ' + latlng121.lat() + '<br />Longitude: ' + latlng121.lng()
        });
        infoWindow.open(map, marker121);
    });
    var marker122 = new google.maps.Marker({
        position: latlng122,
        map: map,
        title: "Navio: NEXUS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker122, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NEXUS' + '<br />Latitude: ' + latlng122.lat() + '<br />Longitude: ' + latlng122.lng()
        });
        infoWindow.open(map, marker122);
    });
    var marker123 = new google.maps.Marker({
        position: latlng123,
        map: map,
        title: "Navio: NIAGARA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker123, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NIAGARA' + '<br />Latitude: ' + latlng123.lat() + '<br />Longitude: ' + latlng123.lng()
        });
        infoWindow.open(map, marker123);
    });
    var marker124 = new google.maps.Marker({
        position: latlng124,
        map: map,
        title: "Navio: NIAMEY",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker124, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NIAMEY' + '<br />Latitude: ' + latlng124.lat() + '<br />Longitude: ' + latlng124.lng()
        });
        infoWindow.open(map, marker124);
    });
    var marker125 = new google.maps.Marker({
        position: latlng125,
        map: map,
        title: "Navio: NIJMEGEN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker125, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NIJMEGEN' + '<br />Latitude: ' + latlng125.lat() + '<br />Longitude: ' + latlng125.lng()
        });
        infoWindow.open(map, marker125);
    });
    var marker126 = new google.maps.Marker({
        position: latlng126,
        map: map,
        title: "Navio: NIMES",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker126, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NIMES' + '<br />Latitude: ' + latlng126.lat() + '<br />Longitude: ' + latlng126.lng()
        });
        infoWindow.open(map, marker126);
    });
    var marker127 = new google.maps.Marker({
        position: latlng127,
        map: map,
        title: "Navio: NITEROI",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker127, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NITEROI' + '<br />Latitude: ' + latlng127.lat() + '<br />Longitude: ' + latlng127.lng()
        });
        infoWindow.open(map, marker127);
    });
    var marker128 = new google.maps.Marker({
        position: latlng128,
        map: map,
        title: "Navio: NOMAD",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker128, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NOMAD' + '<br />Latitude: ' + latlng128.lat() + '<br />Longitude: ' + latlng128.lng()
        });
        infoWindow.open(map, marker128);
    });
    var marker129 = new google.maps.Marker({
        position: latlng129,
        map: map,
        title: "Navio: NORFOLK",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker129, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NORFOLK' + '<br />Latitude: ' + latlng129.lat() + '<br />Longitude: ' + latlng129.lng()
        });
        infoWindow.open(map, marker129);
    });
    var marker130 = new google.maps.Marker({
        position: latlng130,
        map: map,
        title: "Navio: NORTHAMPTON",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker130, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NORTHAMPTON' + '<br />Latitude: ' + latlng130.lat() + '<br />Longitude: ' + latlng130.lng()
        });
        infoWindow.open(map, marker130);
    });
    var marker131 = new google.maps.Marker({
        position: latlng131,
        map: map,
        title: "Navio: NORTHWOOD",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker131, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: NORTHWOOD' + '<br />Latitude: ' + latlng131.lat() + '<br />Longitude: ' + latlng131.lng()
        });
        infoWindow.open(map, marker131);
    });
    var marker132 = new google.maps.Marker({
        position: latlng132,
        map: map,
        title: "Navio: OASIS OF THE SEAS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker132, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: OASIS OF THE SEAS' + '<br />Latitude: ' + latlng132.lat() + '<br />Longitude: ' + latlng132.lng()
        });
        infoWindow.open(map, marker132);
    });
    var marker133 = new google.maps.Marker({
        position: latlng133,
        map: map,
        title: "Navio: PATRAS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker133, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: PATRAS' + '<br />Latitude: ' + latlng133.lat() + '<br />Longitude: ' + latlng133.lng()
        });
        infoWindow.open(map, marker133);
    });
    var marker134 = new google.maps.Marker({
        position: latlng134,
        map: map,
        title: "Navio: PELICAN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker134, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: PELICAN' + '<br />Latitude: ' + latlng134.lat() + '<br />Longitude: ' + latlng134.lng()
        });
        infoWindow.open(map, marker134);
    });
    var marker135 = new google.maps.Marker({
        position: latlng135,
        map: map,
        title: "Navio: PENANG",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker135, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: PENANG' + '<br />Latitude: ' + latlng135.lat() + '<br />Longitude: ' + latlng135.lng()
        });
        infoWindow.open(map, marker135);
    });
    var marker136 = new google.maps.Marker({
        position: latlng136,
        map: map,
        title: "Navio: PENGUIN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker136, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: PENGUIN' + '<br />Latitude: ' + latlng136.lat() + '<br />Longitude: ' + latlng136.lng()
        });
        infoWindow.open(map, marker136);
    });
    var marker137 = new google.maps.Marker({
        position: latlng137,
        map: map,
        title: "Navio: PHOENIX",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker137, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: PHOENIX' + '<br />Latitude: ' + latlng137.lat() + '<br />Longitude: ' + latlng137.lng()
        });
        infoWindow.open(map, marker137);
    });
    var marker138 = new google.maps.Marker({
        position: latlng138,
        map: map,
        title: "Navio: REGENSBURG",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker138, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: REGENSBURG' + '<br />Latitude: ' + latlng138.lat() + '<br />Longitude: ' + latlng138.lng()
        });
        infoWindow.open(map, marker138);
    });
    var marker139 = new google.maps.Marker({
        position: latlng139,
        map: map,
        title: "Navio: ROUBAIX",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker139, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: ROUBAIX' + '<br />Latitude: ' + latlng139.lat() + '<br />Longitude: ' + latlng139.lng()
        });
        infoWindow.open(map, marker139);
    });
    var marker140 = new google.maps.Marker({
        position: latlng140,
        map: map,
        title: "Navio: SALINA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker140, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SALINA' + '<br />Latitude: ' + latlng140.lat() + '<br />Longitude: ' + latlng140.lng()
        });
        infoWindow.open(map, marker140);
    });
    var marker141 = new google.maps.Marker({
        position: latlng141,
        map: map,
        title: "Navio: SELETAR",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker141, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SELETAR' + '<br />Latitude: ' + latlng141.lat() + '<br />Longitude: ' + latlng141.lng()
        });
        infoWindow.open(map, marker141);
    });
    var marker142 = new google.maps.Marker({
        position: latlng142,
        map: map,
        title: "Navio: SEMAKAU",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker142, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SEMAKAU' + '<br />Latitude: ' + latlng142.lat() + '<br />Longitude: ' + latlng142.lng()
        });
        infoWindow.open(map, marker142);
    });
    var marker143 = new google.maps.Marker({
        position: latlng143,
        map: map,
        title: "Navio: SENTOSA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker143, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SENTOSA' + '<br />Latitude: ' + latlng143.lat() + '<br />Longitude: ' + latlng143.lng()
        });
        infoWindow.open(map, marker143);
    });
    var marker144 = new google.maps.Marker({
        position: latlng144,
        map: map,
        title: "Navio: SEOUL",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker144, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SEOUL' + '<br />Latitude: ' + latlng144.lat() + '<br />Longitude: ' + latlng144.lng()
        });
        infoWindow.open(map, marker144);
    });
    var marker145 = new google.maps.Marker({
        position: latlng145,
        map: map,
        title: "Navio: SEVILLE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker145, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SEVILLE' + '<br />Latitude: ' + latlng145.lat() + '<br />Longitude: ' + latlng145.lng()
        });
        infoWindow.open(map, marker145);
    });
    var marker146 = new google.maps.Marker({
        position: latlng146,
        map: map,
        title: "Navio: SHAMS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker146, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SHAMS' + '<br />Latitude: ' + latlng146.lat() + '<br />Longitude: ' + latlng146.lng()
        });
        infoWindow.open(map, marker146);
    });
    var marker147 = new google.maps.Marker({
        position: latlng147,
        map: map,
        title: "Navio: SHEERNESS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker147, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SHEERNESS' + '<br />Latitude: ' + latlng147.lat() + '<br />Longitude: ' + latlng147.lng()
        });
        infoWindow.open(map, marker147);
    });
    var marker148 = new google.maps.Marker({
        position: latlng148,
        map: map,
        title: "Navio: SOFIA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker148, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SOFIA' + '<br />Latitude: ' + latlng148.lat() + '<br />Longitude: ' + latlng148.lng()
        });
        infoWindow.open(map, marker148);
    });
    var marker149 = new google.maps.Marker({
        position: latlng149,
        map: map,
        title: "Navio: SPIRIT",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker149, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SPIRIT' + '<br />Latitude: ' + latlng149.lat() + '<br />Longitude: ' + latlng149.lng()
        });
        infoWindow.open(map, marker149);
    });
    var marker150 = new google.maps.Marker({
        position: latlng150,
        map: map,
        title: "Navio: STADELHORN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker150, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: STADELHORN' + '<br />Latitude: ' + latlng150.lat() + '<br />Longitude: ' + latlng150.lng()
        });
        infoWindow.open(map, marker150);
    });
    var marker151 = new google.maps.Marker({
        position: latlng151,
        map: map,
        title: "Navio: STEPNICA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker151, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: STEPNICA' + '<br />Latitude: ' + latlng151.lat() + '<br />Longitude: ' + latlng151.lng()
        });
        infoWindow.open(map, marker151);
    });
    var marker152 = new google.maps.Marker({
        position: latlng152,
        map: map,
        title: "Navio: SUZHOU",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker152, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SUZHOU' + '<br />Latitude: ' + latlng152.lat() + '<br />Longitude: ' + latlng152.lng()
        });
        infoWindow.open(map, marker152);
    });
    var marker153 = new google.maps.Marker({
        position: latlng153,
        map: map,
        title: "Navio: SYMPHONY OF THE SEAS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker153, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: SYMPHONY OF THE SEAS' + '<br />Latitude: ' + latlng153.lat() + '<br />Longitude: ' + latlng153.lng()
        });
        infoWindow.open(map, marker153);
    });
    var marker154 = new google.maps.Marker({
        position: latlng154,
        map: map,
        title: "Navio: TAASINGE",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker154, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: TAASINGE' + '<br />Latitude: ' + latlng154.lat() + '<br />Longitude: ' + latlng154.lng()
        });
        infoWindow.open(map, marker154);
    });
    var marker155 = new google.maps.Marker({
        position: latlng155,
        map: map,
        title: "Navio: TACOMA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker155, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: TACOMA' + '<br />Latitude: ' + latlng155.lat() + '<br />Longitude: ' + latlng155.lng()
        });
        infoWindow.open(map, marker155);
    });
    var marker156 = new google.maps.Marker({
        position: latlng156,
        map: map,
        title: "Navio: TAMPA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker156, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: TAMPA' + '<br />Latitude: ' + latlng156.lat() + '<br />Longitude: ' + latlng156.lng()
        });
        infoWindow.open(map, marker156);
    });
    var marker157 = new google.maps.Marker({
        position: latlng157,
        map: map,
        title: "Navio: TOPPER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker157, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: TOPPER' + '<br />Latitude: ' + latlng157.lat() + '<br />Longitude: ' + latlng157.lng()
        });
        infoWindow.open(map, marker157);
    });
    var marker158 = new google.maps.Marker({
        position: latlng158,
        map: map,
        title: "Navio: TRANSPORTER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker158, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: TRANSPORTER' + '<br />Latitude: ' + latlng158.lat() + '<br />Longitude: ' + latlng158.lng()
        });
        infoWindow.open(map, marker158);
    });
    var marker159 = new google.maps.Marker({
        position: latlng159,
        map: map,
        title: "Navio: TRAVELLER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker159, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: TRAVELLER' + '<br />Latitude: ' + latlng159.lat() + '<br />Longitude: ' + latlng159.lng()
        });
        infoWindow.open(map, marker159);
    });
    var marker160 = new google.maps.Marker({
        position: latlng160,
        map: map,
        title: "Navio: TUKANG",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker160, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: TUKANG' + '<br />Latitude: ' + latlng160.lat() + '<br />Longitude: ' + latlng160.lng()
        });
        infoWindow.open(map, marker160);
    });
    var marker161 = new google.maps.Marker({
        position: latlng161,
        map: map,
        title: "Navio: UTAH",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker161, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: UTAH' + '<br />Latitude: ' + latlng161.lat() + '<br />Longitude: ' + latlng161.lng()
        });
        infoWindow.open(map, marker161);
    });
    var marker162 = new google.maps.Marker({
        position: latlng162,
        map: map,
        title: "Navio: VALENCIA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker162, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: VALENCIA' + '<br />Latitude: ' + latlng162.lat() + '<br />Longitude: ' + latlng162.lng()
        });
        infoWindow.open(map, marker162);
    });
    var marker163 = new google.maps.Marker({
        position: latlng163,
        map: map,
        title: "Navio: VALIANT",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker163, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: VALIANT' + '<br />Latitude: ' + latlng163.lat() + '<br />Longitude: ' + latlng163.lng()
        });
        infoWindow.open(map, marker163);
    });
    var marker164 = new google.maps.Marker({
        position: latlng164,
        map: map,
        title: "Navio: VALLVIK",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker164, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: VALLVIK' + '<br />Latitude: ' + latlng164.lat() + '<br />Longitude: ' + latlng164.lng()
        });
        infoWindow.open(map, marker164);
    });
    var marker165 = new google.maps.Marker({
        position: latlng165,
        map: map,
        title: "Navio: VENTURA",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker165, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: VENTURA' + '<br />Latitude: ' + latlng165.lat() + '<br />Longitude: ' + latlng165.lng()
        });
        infoWindow.open(map, marker165);
    });
    var marker166 = new google.maps.Marker({
        position: latlng166,
        map: map,
        title: "Navio: VENTURER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker166, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: VENTURER' + '<br />Latitude: ' + latlng166.lat() + '<br />Longitude: ' + latlng166.lng()
        });
        infoWindow.open(map, marker166);
    });
    var marker167 = new google.maps.Marker({
        position: latlng167,
        map: map,
        title: "Navio: VILNIUS",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker167, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: VILNIUS' + '<br />Latitude: ' + latlng167.lat() + '<br />Longitude: ' + latlng167.lng()
        });
        infoWindow.open(map, marker167);
    });
    var marker168 = new google.maps.Marker({
        position: latlng168,
        map: map,
        title: "Navio: VISBY",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker168, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: VISBY' + '<br />Latitude: ' + latlng168.lat() + '<br />Longitude: ' + latlng168.lng()
        });
        infoWindow.open(map, marker168);
    });
    var marker169 = new google.maps.Marker({
        position: latlng169,
        map: map,
        title: "Navio: VOYAGER",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker169, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: VOYAGER' + '<br />Latitude: ' + latlng169.lat() + '<br />Longitude: ' + latlng169.lng()
        });
        infoWindow.open(map, marker169);
    });
    var marker170 = new google.maps.Marker({
        position: latlng170,
        map: map,
        title: "Navio: YORKTOWN",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker170, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: YORKTOWN' + '<br />Latitude: ' + latlng170.lat() + '<br />Longitude: ' + latlng170.lng()
        });
        infoWindow.open(map, marker170);
    });
    var marker171 = new google.maps.Marker({
        position: latlng171,
        map: map,
        title: "Navio: 1",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker171, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 1' + '<br />Latitude: ' + latlng171.lat() + '<br />Longitude: ' + latlng171.lng()
        });
        infoWindow.open(map, marker171);
    });
    var marker172 = new google.maps.Marker({
        position: latlng172,
        map: map,
        title: "Navio: 2",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker172, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 2' + '<br />Latitude: ' + latlng172.lat() + '<br />Longitude: ' + latlng172.lng()
        });
        infoWindow.open(map, marker172);
    });
    var marker173 = new google.maps.Marker({
        position: latlng173,
        map: map,
        title: "Navio: 3",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker173, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 3' + '<br />Latitude: ' + latlng173.lat() + '<br />Longitude: ' + latlng173.lng()
        });
        infoWindow.open(map, marker173);
    });
    var marker174 = new google.maps.Marker({
        position: latlng174,
        map: map,
        title: "Navio: 4",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker174, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 4' + '<br />Latitude: ' + latlng174.lat() + '<br />Longitude: ' + latlng174.lng()
        });
        infoWindow.open(map, marker174);
    });
    var marker175 = new google.maps.Marker({
        position: latlng175,
        map: map,
        title: "Navio: 5",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker175, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 5' + '<br />Latitude: ' + latlng175.lat() + '<br />Longitude: ' + latlng175.lng()
        });
        infoWindow.open(map, marker175);
    });
    var marker176 = new google.maps.Marker({
        position: latlng176,
        map: map,
        title: "Navio: 6",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker176, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 6' + '<br />Latitude: ' + latlng176.lat() + '<br />Longitude: ' + latlng176.lng()
        });
        infoWindow.open(map, marker176);
    });
    var marker177 = new google.maps.Marker({
        position: latlng177,
        map: map,
        title: "Navio: 7",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker177, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 7' + '<br />Latitude: ' + latlng177.lat() + '<br />Longitude: ' + latlng177.lng()
        });
        infoWindow.open(map, marker177);
    });
    var marker178 = new google.maps.Marker({
        position: latlng178,
        map: map,
        title: "Navio: 8",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker178, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 8' + '<br />Latitude: ' + latlng178.lat() + '<br />Longitude: ' + latlng178.lng()
        });
        infoWindow.open(map, marker178);
    });
    var marker179 = new google.maps.Marker({
        position: latlng179,
        map: map,
        title: "Navio: 9",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker179, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 9' + '<br />Latitude: ' + latlng179.lat() + '<br />Longitude: ' + latlng179.lng()
        });
        infoWindow.open(map, marker179);
    });
    var marker180 = new google.maps.Marker({
        position: latlng180,
        map: map,
        title: "Navio: 10",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker180, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 10' + '<br />Latitude: ' + latlng180.lat() + '<br />Longitude: ' + latlng180.lng()
        });
        infoWindow.open(map, marker180);
    });
    var marker181 = new google.maps.Marker({
        position: latlng181,
        map: map,
        title: "Navio: 11",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker181, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 11' + '<br />Latitude: ' + latlng181.lat() + '<br />Longitude: ' + latlng181.lng()
        });
        infoWindow.open(map, marker181);
    });
    var marker182 = new google.maps.Marker({
        position: latlng182,
        map: map,
        title: "Navio: 12",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker182, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 12' + '<br />Latitude: ' + latlng182.lat() + '<br />Longitude: ' + latlng182.lng()
        });
        infoWindow.open(map, marker182);
    });
    var marker183 = new google.maps.Marker({
        position: latlng183,
        map: map,
        title: "Navio: 13",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker183, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 13' + '<br />Latitude: ' + latlng183.lat() + '<br />Longitude: ' + latlng183.lng()
        });
        infoWindow.open(map, marker183);
    });
    var marker184 = new google.maps.Marker({
        position: latlng184,
        map: map,
        title: "Navio: 14",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker184, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 14' + '<br />Latitude: ' + latlng184.lat() + '<br />Longitude: ' + latlng184.lng()
        });
        infoWindow.open(map, marker184);
    });
    var marker185 = new google.maps.Marker({
        position: latlng185,
        map: map,
        title: "Navio: 15",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker185, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 15' + '<br />Latitude: ' + latlng185.lat() + '<br />Longitude: ' + latlng185.lng()
        });
        infoWindow.open(map, marker185);
    });
    var marker186 = new google.maps.Marker({
        position: latlng186,
        map: map,
        title: "Navio: 16",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker186, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 16' + '<br />Latitude: ' + latlng186.lat() + '<br />Longitude: ' + latlng186.lng()
        });
        infoWindow.open(map, marker186);
    });
    var marker187 = new google.maps.Marker({
        position: latlng187,
        map: map,
        title: "Navio: 17",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker187, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 17' + '<br />Latitude: ' + latlng187.lat() + '<br />Longitude: ' + latlng187.lng()
        });
        infoWindow.open(map, marker187);
    });
    var marker188 = new google.maps.Marker({
        position: latlng188,
        map: map,
        title: "Navio: 18",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker188, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 18' + '<br />Latitude: ' + latlng188.lat() + '<br />Longitude: ' + latlng188.lng()
        });
        infoWindow.open(map, marker188);
    });
    var marker189 = new google.maps.Marker({
        position: latlng189,
        map: map,
        title: "Navio: 19",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker189, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 19' + '<br />Latitude: ' + latlng189.lat() + '<br />Longitude: ' + latlng189.lng()
        });
        infoWindow.open(map, marker189);
    });
    var marker190 = new google.maps.Marker({
        position: latlng190,
        map: map,
        title: "Navio: 20",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker190, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 20' + '<br />Latitude: ' + latlng190.lat() + '<br />Longitude: ' + latlng190.lng()
        });
        infoWindow.open(map, marker190);
    });
    var marker191 = new google.maps.Marker({
        position: latlng191,
        map: map,
        title: "Navio: 21",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker191, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 21' + '<br />Latitude: ' + latlng191.lat() + '<br />Longitude: ' + latlng191.lng()
        });
        infoWindow.open(map, marker191);
    });
    var marker192 = new google.maps.Marker({
        position: latlng192,
        map: map,
        title: "Navio: 22",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker192, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 22' + '<br />Latitude: ' + latlng192.lat() + '<br />Longitude: ' + latlng192.lng()
        });
        infoWindow.open(map, marker192);
    });
    var marker193 = new google.maps.Marker({
        position: latlng193,
        map: map,
        title: "Navio: 23",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker193, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 23' + '<br />Latitude: ' + latlng193.lat() + '<br />Longitude: ' + latlng193.lng()
        });
        infoWindow.open(map, marker193);
    });
    var marker194 = new google.maps.Marker({
        position: latlng194,
        map: map,
        title: "Navio: 24",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker194, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 24' + '<br />Latitude: ' + latlng194.lat() + '<br />Longitude: ' + latlng194.lng()
        });
        infoWindow.open(map, marker194);
    });
    var marker195 = new google.maps.Marker({
        position: latlng195,
        map: map,
        title: "Navio: 25",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker195, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 25' + '<br />Latitude: ' + latlng195.lat() + '<br />Longitude: ' + latlng195.lng()
        });
        infoWindow.open(map, marker195);
    });
    var marker196 = new google.maps.Marker({
        position: latlng196,
        map: map,
        title: "Navio: 26",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker196, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 26' + '<br />Latitude: ' + latlng196.lat() + '<br />Longitude: ' + latlng196.lng()
        });
        infoWindow.open(map, marker196);
    });
    var marker197 = new google.maps.Marker({
        position: latlng197,
        map: map,
        title: "Navio: 27",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker197, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 27' + '<br />Latitude: ' + latlng197.lat() + '<br />Longitude: ' + latlng197.lng()
        });
        infoWindow.open(map, marker197);
    });
    var marker198 = new google.maps.Marker({
        position: latlng198,
        map: map,
        title: "Navio: 28",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker198, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 28' + '<br />Latitude: ' + latlng198.lat() + '<br />Longitude: ' + latlng198.lng()
        });
        infoWindow.open(map, marker198);
    });
    var marker199 = new google.maps.Marker({
        position: latlng199,
        map: map,
        title: "Navio: 29",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker199, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 29' + '<br />Latitude: ' + latlng199.lat() + '<br />Longitude: ' + latlng199.lng()
        });
        infoWindow.open(map, marker199);
    });
    var marker200 = new google.maps.Marker({
        position: latlng200,
        map: map,
        title: "Navio: 30",
        icon: pinImageTrafoConcluido
    });
    google.maps.event.addListener(marker200, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Navio: 30' + '<br />Latitude: ' + latlng200.lat() + '<br />Longitude: ' + latlng200.lng()
        });
        infoWindow.open(map, marker200);
    });
    var marker_cars0 = new google.maps.Marker({
        position: latlng_cars0,
        map: map,
        title: " Melissa ",
        icon: pinImageCar
    });
    google.maps.event.addListener(marker_cars0, "click", function (e) {
        var infoWindow = new google.maps.InfoWindow({
        content: 'Latitude: ' + latlng_cars0.lat() + '<br />Longitude: ' + latlng_cars0.lng()
        });
        infoWindow.open(map, marker_cars0);
    });
}

function error(msg){
    var s = document.querySelector('#status');
    s.InnerHTML = typeof msg == 'string' ? msg : "failed";
    s.className = 'fail';
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    error('not supported');
}

google.maps.event.addDomListener(window, 'load', initialize);

initialize();
Vue.use(vesselsmap)
