import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import * as Icon from 'akar-icons';

const Icons = () => {

  const colorList = [
    'aqua',
    'aquamarine',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkgrey',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'gold',
    'goldenrod',
    'gray',
    'green',
    'greenyellow',
    'grey',
    'hotpink',
    'indianred',
    'indigo',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lime',
    'limegreen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mistyrose',
    'moccasin',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'rebeccapurple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'yellow',
    'yellowgreen',
  ];

  return (
    <DefaultLayout>
      <Breadcrumb pageName="نمادها" />
      
      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              ۴۳۰ نماد  <a target='_blank' className='hover:bg-violet-600' href="https://akaricons.com/">akar-icons</a>  به صورت کامپوننت های ری اکت
            </h3>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="flex-grow: 1;">
            <button className="text-sm hover:text-primary">
              <Icon.ArrowLeft color={colorList[Math.floor(Math.random() * colorList.length)]} strokeWidth={2} size={72}/>
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowRight color={colorList[Math.floor(Math.random() * colorList.length)]} strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowUp color={colorList[Math.floor(Math.random() * colorList.length)]} strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowDown color={colorList[Math.floor(Math.random() * colorList.length)]} strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowDownLeft color={colorList[Math.floor(Math.random() * colorList.length)]} strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowUpLeft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowUpRight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowDownRight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChevronLeft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChevronRight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChevronUp color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChevronDown color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowCycle color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowClockwise color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowCounterClockwise color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowBackThick color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowBackThickFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowForwardThick color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowForwardThickFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Width color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Height color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Enlarge color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Reduce color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowLeftThick color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowDownThick color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowRightThick color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowUpThick color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowBack color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowForward color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleLeft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleRight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleUp color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleDown color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleTriangleRight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleTriangleLeft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleTriangleUp color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleTriangleDown color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleChevronLeft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleChevronRight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleChevronUp color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleChevronDown color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleTriangleRightFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleTriangleLeftFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleTriangleUpFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleTriangleDownFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleChevronLeftFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleChevronRightFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleChevronUpFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleChevronDownFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChevronHorizontal color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChevronVertical color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowUpDown color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowRightLeft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowShuffle color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ArrowRepeat color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ForkRight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ForkLeft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleLeftFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleRightFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleUpFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleDownFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChevronDownSmall color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChevronUpSmall color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChevronRightSmall color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChevronLeftSmall color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Plus color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Minus color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Cross color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Check color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Question color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleAlert color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleX color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleCheck color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CirclePlus color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleMinus color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleAlert color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Stop color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Info color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Play color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Pause color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Command color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SoundDown color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SoundOn color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SoundOff color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SoundUp color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Infinite color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AirplayAudio color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AirplayVideo color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Miniplayer color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TextAlignLeft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TextAlignCenter color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TextAlignRight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TextAlignJustified color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Mention color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Heart color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.FullScreen color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.NormalScreen color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AlignLeft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AlignHorizontalCenter color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AlignRight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AlignTop color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AlignVerticalCenter color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AlignBottom color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ShareBox color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Download color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AlignToTop color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AlignToMiddle color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AlignToBottom color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Block color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.MoreHorizontalFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.MoreVerticalFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Wifi color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Bluetooth color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Location color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.LinkChain color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.LinkOut color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SignOut color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Hashtag color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Grid color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.LinkOn color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.LinkOff color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChatBubble color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChatAdd color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChatRemove color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ZoomIn color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ZoomOut color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Box color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CheckBox color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CheckBoxFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Rss color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Backspace color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BackspaceFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.DoubleCheck color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.DragVerticalFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.DragHorizontalFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.DotGridFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChatDots color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChatError color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Health color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.QuestionFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleAlertFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleXFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CirclePlusFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleMinusFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleCheckFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleAlertFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.StopFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.InfoFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CloudDownload color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CloudUpload color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Network color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ToggleOff color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ToggleOn color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ToggleOffFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ToggleOnFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ThreeLineHorizontal color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ThreeLineVertical color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TwoLineHorizontal color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TwoLineVertical color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PointerLeftFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PointerRightFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PointerUpFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PointerDownFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChatApprove color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChatQuestion color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ChatEdit color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Cursor color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Frame color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Slice color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Percentage color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CheckIn color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Video color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Cut color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Filter color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SettingsHorizontal color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SettingsVertical color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Ascending color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Descending color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.StatisticUp color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.StatisticDown color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PanelRight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PanelLeft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PanelSplit color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Dashboard color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PanelBottom color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PanelTop color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PanelSplitRow color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PanelSplitColumn color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Language color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Sort color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Equal color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.EqualFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Radio color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.RadioFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Save color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AugmentedReality color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.History color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.XSmall color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Ribbon color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Phone color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Attach color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Thunder color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Send color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Sun color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Moon color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Pencil color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Pin color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Draft color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.EyeOpen color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.EyeSlashed color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.EyeClosed color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Airpods color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Paper color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.File color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Headphone color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.MobileDevice color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TabletDevice color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.LaptopDevice color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.DesktopDevice color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.WatchDevice color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Wallet color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Search color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.LockOn color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.LockOff color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Camera color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Image color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Folder color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.FolderAdd color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Calendar color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Bell color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BatteryEmpty color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BatteryLow color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BatteryMedium color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BatteryFull color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Flashlight color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Calculator color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Alarm color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Globe color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BookOpen color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Cloud color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Envelope color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ShoppingBag color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Gift color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Map color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Shield color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Tag color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Gear color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Flag color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Ticket color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Bug color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Copy color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Lifesaver color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Star color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BatteryCharging color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Trophy color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Leaf color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Schedule color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Money color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Scissor color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Coin color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Telescope color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Planet color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.GameController color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.VrAr color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Computing color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Inbox color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.LightBulb color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Chess color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TrashCan color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Microphone color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Coffee color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CreditCard color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Utensils color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Radish color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Clipboard color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Bicycle color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Plane color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PlaneFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Jar color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Glasses color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Plant color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Edit color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TrashBin color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SunFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.MoonFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.KeyCap color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Newspaper color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Door color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Water color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Fire color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Air color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Home color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Umbrella color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TogoCup color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Devices color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ShippingBoxV1 color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ShippingBoxV2 color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Cart color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Basket color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.OpenEnvelope color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Clock color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Truck color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.WineGlass color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.VapeKit color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Briefcase color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Boat color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Crown color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Sword color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.DoubleSword color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Key color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Dental color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Cake color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BookClose color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Sparkles color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Music color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.MusicNote color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.MusicAlbum color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.MusicAlbumFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Dice6 color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Dice5 color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Bank color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PaperAirplane color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.HomeAlt1 color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CreditCardAlt1 color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Reciept color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Hammer color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Data color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Dice4 color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Dice3 color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Dice2 color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Dice1 color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PriceCut color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Person color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PersonAdd color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PersonCheck color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PersonCross color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.FaceVeryHappy color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.FaceHappy color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.FaceNeutral color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.FaceSad color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.FaceVerySad color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.FaceWink color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ThumbsUp color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ThumbsDown color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.VictoryHand color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PointingUp color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.RockOn color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PeopleMultiple color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PeopleGroup color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Hand color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PointerHand color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.FacebookFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TwitterFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.LinkedinBoxFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.DribbbleFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.RedditFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TumblrFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PinterestFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.VkFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.YoutubeFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.InstagramFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.FigmaFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.GithubFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TelegramFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.DropboxFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.GoogleFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.GoogleContainedFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AndroidFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BitcoinFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SpotifyFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SoundcloudFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CodepenFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.WhatsappFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.LinkedinFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.VimeoFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.MediumFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ZoomFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SlackFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.StackOverflowFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TwitchFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SnapchatFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.OctocatFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.DiscordFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BehanceFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PostgresqlFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.MastodonFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TiktokFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.UnsplashFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ProductHuntFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Circle color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CircleFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Triangle color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TriangleFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Square color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SquareFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Tetragon color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TetragonFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Pentagon color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PentagonFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Hexagon color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.HexagonFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Heptagon color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.HeptagonFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Octagon color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.OctagonFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Oval color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Parallelogram color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.Diamond color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.BootstrapFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ReactFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.AngularFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.VueFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.JavascriptFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.NodeFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.HtmlFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.CssFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.VercelFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.NextjsFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.ReduxFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PythonFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.GraphqlFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.PhpFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.JqueryFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.SassFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.GatsbyFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.NpmFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.YarnFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.DjangoFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.VscodeFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
            <button className="text-sm hover:text-primary">
              <Icon.TypescriptFill color={colorList[Math.floor(Math.random() * colorList.length)]}  strokeWidth={2} size={72} />
            </button>
          </span>

        </div>
      </div>
    </DefaultLayout>
  );
};

export default Icons;


