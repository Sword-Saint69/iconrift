import { 
  Squares2X2Icon, 
  HashtagIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  BoltIcon, 
  GlobeAltIcon, 
  MusicalNoteIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  BellIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ShareIcon,
  PaperAirplaneIcon,
  FingerPrintIcon,
  LockClosedIcon,
  KeyIcon,
  CpuChipIcon,
  SignalIcon,
  WifiIcon,
  Battery50Icon,
  SunIcon,
  MoonIcon,
  BeakerIcon,
  VariableIcon,
  CommandLineIcon,
  CpuChipIcon as ChipIcon,
  WrenchIcon,
  PaintBrushIcon,
  PhotoIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  MapIcon,
  FlagIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  TruckIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

import { 
  Atom, 
  Command, 
  Fingerprint, 
  Ghost, 
  Gem, 
  Orbit, 
  Zap, 
  Globe, 
  Layers, 
  Cpu, 
  Activity, 
  Flame,
  // Architecture & Flow
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ArrowDownLeft, Move, CornerDownRight, CornerUpLeft, 
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ChevronsUp, ChevronsDown, Maximize, Minimize, RefreshCw, RotateCcw, GitBranch,
  // Digital Documents
  FileText, FilePlus, FileMinus, FolderPlus, FolderOpen, Archive, Briefcase, Clipboard, Book, Bookmark, 
  Calendar, List, ListTodo, CheckCircle, XCircle, AlertCircle, Info, HelpCircle, PencilLine, Save,
  // Media & Playback
  Play, Pause, SkipBack, SkipForward, Volume, Volume1, Volume2, VolumeX, Mic, Headphones, Music, Camera, Video, 
  Image, Monitor, Smartphone, Tablet, Cast, Tv, Speaker,
  // Hardware & Systems
  Database, HardDrive, Server, Wifi, Bluetooth, Usb, Rss, Power, Terminal, Code, Braces, Hash, MapPin, 
  Compass, Sun, Moon, Cloud, Satellite, Radio, Mouse,
  // Interface Elements
  Menu, Grid, Layout, Columns, Rows, PanelLeft, PanelRight, Bell, User, Users, UserPlus, UserMinus, Mail, 
  Send, Share, Link, ExternalLink, Lock, Shield, Eye,
  // NEW: 200 Icons Expansion
  // Commerce & Finance
  DollarSign, Banknote, Landmark, TrendingUp, Wallet, Recycle, PiggyBank, Coins, Receipt, ShoppingCart, BadgeDollarSign, CircleDollarSign, HandCoins, BaggageClaim, BarChart, Calculator, Container, Package, Factory, CreditCard,
  // Nature & Ecology
  Trees, Flower, Leaf, Sprout, CloudSun, CloudRain, CloudLightning, Wind, Thermometer, Mountain, Waves, Sunset, Sunrise, Rainbow, Bird, Fish, Rabbit, Footprints, Bug, SunMedium,
  // Travel & Logistics
  Plane, Car, Train, Ship, Map, Compass as Compass2, Luggage, Hotel, Locate, Milestone, Navigation, ParkingCircle, TramFront, Bike, Truck, Fuel, Skull, Church, Castle, Globe2,
  // Health & Wellness
  HeartPulse, Stethoscope, Activity as Activity2, Dumbbell, Apple, Pill, Ambulance, Baby, Accessibility, Bandage, Bone, GlassWater, Microscope, Salad, Syringe, FlaskConical, Accessibility as Accessibility2, Dna, Brain, Bot,
  // Science & Innovation
  Atom as Atom2, Microscope as Microscope2, Dna as Dna2, TestTube, Beaker, Magnet, Orbit as Orbit2, Telescope, Zap as Zap2, FlaskConical as FlaskConical2, FlaskRound, Grid3X3, LayoutGrid, Library, Notebook, Rocket, Search, Shield as Shield2, Waves as Waves2, Telescope as Telescope2,
  // Education & Learning
  GraduationCap, BookOpen, Pencil, Ruler, School, Trophy, Shapes, Eraser, Clock, PenTool, Printer, Scissors, FileHeart, FileQuestion, FileWarning, FileSearch, FileBadge, FileJson, FileSignature, BookCopy,
  // Gaming & Play
  Gamepad, Joystick, Gamepad2, Target, Ghost as Ghost2, Puzzle, Share2, PlayCircle, Video as Video2, Gamepad2 as Gamepad3, Mic2, Crown, Sword, Spade, Club, Diamond, Dice5, Medal, Disc, PlayCircle as PlayCircle2,
  // Kitchen & Culinary
  Coffee, Utensils, Pizza, Soup, Beef, ChefHat, Cookie, Croissant, CupSoda, IceCream, Milk, Refrigerator, Salad as Salad2, Sandwich, Wine, Beer, Cake, Egg, Martini,
  // Home & Lifestyle
  Lamp, Sofa, Bed, Tv as Tv2, Speaker as Speaker2, Home, Key, DoorOpen, Lightbulb, Camera as Camera2, Box, Trash2, Umbrella, Watch, Wrench, Search as Search2, Settings, User as User2, Users as Users2, Contact,
  // Tools & Utility
  Hammer, Wrench as Wrench2, Drill, Pickaxe, Nut, Axe, Cigarette, Construction, Forklift, Grip, HardHat, Pin, Plug, Nut as Nut2, Table, Timer, ToyBrick, UtilityPole, HardDrive as HardDrive2
} from 'lucide-react';

import { Blocks, SearchIcon, SettingsIcon } from '@/components/AnimatedIcons';

export const collections = [
  { 
    id: 'spatial-motion',
    name: 'Spatial Motion', 
    description: 'Our signature interactive animations. Hand-crafted with Framer Motion for high-fidelity spatial UI.',
    icon: Blocks,
    count: 3,
    color: 'text-indigo-600',
    icons: [
      { name: 'Blocks', component: Blocks },
      { name: 'Search', component: SearchIcon },
      { name: 'Settings', component: SettingsIcon }
    ]
  },
  { 
    id: 'architecture-flow',
    name: 'Architecture & Flow', 
    description: 'Complex navigation patterns, branching logic, and directional symbols for spatial maps.',
    icon: GitBranch,
    count: 20,
    color: 'text-blue-600',
    icons: [
      { name: 'GitBranch', component: GitBranch }, { name: 'ArrowUp', component: ArrowUp }, { name: 'ArrowDown', component: ArrowDown }, 
      { name: 'ArrowLeft', component: ArrowLeft }, { name: 'ArrowRight', component: ArrowRight }, { name: 'ArrowUpRight', component: ArrowUpRight }, 
      { name: 'ArrowDownLeft', component: ArrowDownLeft }, { name: 'Move', component: Move }, { name: 'CornerDownRight', component: CornerDownRight }, 
      { name: 'CornerUpLeft', component: CornerUpLeft }, { name: 'ChevronUp', component: ChevronUp }, { name: 'ChevronDown', component: ChevronDown }, 
      { name: 'ChevronLeft', component: ChevronLeft }, { name: 'ChevronRight', component: ChevronRight }, { name: 'ChevronsUp', component: ChevronsUp }, 
      { name: 'ChevronsDown', component: ChevronsDown }, { name: 'Maximize', component: Maximize }, { name: 'Minimize', component: Minimize }, 
      { name: 'RefreshCw', component: RefreshCw }, { name: 'RotateCcw', component: RotateCcw }
    ]
  },
  { 
    id: 'digital-documents',
    name: 'Digital Documents', 
    description: 'Productivity symbols, file types, and organizational patterns for modern operating systems.',
    icon: FileText,
    count: 20,
    color: 'text-emerald-600',
    icons: [
      { name: 'FileText', component: FileText }, { name: 'FilePlus', component: FilePlus }, { name: 'FileMinus', component: FileMinus }, 
      { name: 'FolderPlus', component: FolderPlus }, { name: 'FolderOpen', component: FolderOpen }, { name: 'Archive', component: Archive }, 
      { name: 'Briefcase', component: Briefcase }, { name: 'Clipboard', component: Clipboard }, { name: 'Book', component: Book }, 
      { name: 'Bookmark', component: Bookmark }, { name: 'Calendar', component: Calendar }, { name: 'List', component: List }, 
      { name: 'ListTodo', component: ListTodo }, { name: 'CheckCircle', component: CheckCircle }, { name: 'XCircle', component: XCircle }, 
      { name: 'AlertCircle', component: AlertCircle }, { name: 'Info', component: Info }, { name: 'HelpCircle', component: HelpCircle }, 
      { name: 'PencilLine', component: PencilLine }, { name: 'Save', component: Save }
    ]
  },
  { 
    id: 'media-playback',
    name: 'Media & Playback', 
    description: 'The creative spectrum. Audio controls, video production, and capture devices.',
    icon: Play,
    count: 20,
    color: 'text-orange-500',
    icons: [
      { name: 'Play', component: Play }, { name: 'Pause', component: Pause }, { name: 'SkipBack', component: SkipBack }, 
      { name: 'SkipForward', component: SkipForward }, { name: 'Volume', component: Volume }, { name: 'Volume1', component: Volume1 }, 
      { name: 'Volume2', component: Volume2 }, { name: 'VolumeX', component: VolumeX }, { name: 'Mic', component: Mic }, 
      { name: 'Headphones', component: Headphones }, { name: 'Music', component: Music }, { name: 'Camera', component: Camera }, 
      { name: 'Video', component: Video }, { name: 'Image', component: Image }, { name: 'Monitor', component: Monitor }, 
      { name: 'Smartphone', component: Smartphone }, { name: 'Tablet', component: Tablet }, { name: 'Cast', component: Cast }, 
      { name: 'Tv', component: Tv }, { name: 'Speaker', component: Speaker }
    ]
  },
  { 
    id: 'hardware-systems',
    name: 'Hardware & Systems', 
    description: 'Hardware, infrastructure, connectivity, and telemetry symbols for the future of computing.',
    icon: Database,
    count: 20,
    color: 'text-slate-600',
    icons: [
      { name: 'Database', component: Database }, { name: 'HardDrive', component: HardDrive }, { name: 'Server', component: Server }, 
      { name: 'Wifi', component: Wifi }, { name: 'Bluetooth', component: Bluetooth }, { name: 'Usb', component: Usb }, 
      { name: 'Rss', component: Rss }, { name: 'Power', component: Power }, { name: 'Terminal', component: Terminal }, 
      { name: 'Code', component: Code }, { name: 'Braces', component: Braces }, { name: 'Hash', component: Hash }, 
      { name: 'MapPin', component: MapPin }, { name: 'Compass', component: Compass }, { name: 'Sun', component: Sun }, 
      { name: 'Moon', component: Moon }, { name: 'Cloud', component: Cloud }, { name: 'Satellite', component: Satellite }, 
      { name: 'Radio', component: Radio }, { name: 'Mouse', component: Mouse }
    ]
  },
  { 
    id: 'interface-elements',
    name: 'Interface Elements', 
    description: 'Layout patterns, user accounts, and accessibility symbols for human-centric design.',
    icon: Layout,
    count: 20,
    color: 'text-fuchsia-600',
    icons: [
      { name: 'Layout', component: Layout }, { name: 'Menu', component: Menu }, { name: 'Grid', component: Grid }, 
      { name: 'Columns', component: Columns }, { name: 'Rows', component: Rows }, { name: 'PanelLeft', component: PanelLeft }, 
      { name: 'PanelRight', component: PanelRight }, { name: 'Bell', component: Bell }, { name: 'User', component: User }, 
      { name: 'Users', component: Users }, { name: 'UserPlus', component: UserPlus }, { name: 'UserMinus', component: UserMinus }, 
      { name: 'Mail', component: Mail }, { name: 'Send', component: Send }, { name: 'Share', component: Share }, 
      { name: 'Link', component: Link }, { name: 'ExternalLink', component: ExternalLink }, { name: 'Lock', component: Lock }, 
      { name: 'Shield', component: Shield }, { name: 'Eye', component: Eye }
    ]
  },
  { 
    id: 'lucide-symbols',
    name: 'Lucide Symbols', 
    description: 'Ultra-clean, geometric symbols optimized for spatial interfaces and high-density dashboards.',
    icon: Command,
    count: 12,
    color: 'text-rose-500',
    icons: [
      { name: 'Command', component: Command }, { name: 'Atom', component: Atom }, { name: 'Fingerprint', component: Fingerprint }, 
      { name: 'Ghost', component: Ghost }, { name: 'Gem', component: Gem }, { name: 'Orbit', component: Orbit }, 
      { name: 'Zap', component: Zap }, { name: 'Globe', component: Globe }, { name: 'Layers', component: Layers }, 
      { name: 'Cpu', component: Cpu }, { name: 'Activity', component: Activity }, { name: 'Flame', component: Flame }
    ]
  },
  { 
    id: 'ui-essentials',
    name: 'UI Essentials', 
    description: 'The foundation of every application. Buttons, navigation, and state.',
    icon: Squares2X2Icon,
    count: 12,
    color: 'text-primary',
    icons: [
      { name: 'Home', component: HomeIcon }, { name: 'User', component: UserIcon }, { name: 'Settings', component: Cog6ToothIcon }, 
      { name: 'Notifications', component: BellIcon }, { name: 'Dashboard', component: Squares2X2Icon }, { name: 'Search', component: GlobeAltIcon }, 
      { name: 'Envelope', component: EnvelopeIcon }, { name: 'Menu', component: HashtagIcon }, { name: 'Check', component: ShieldCheckIcon }, 
      { name: 'Action', component: BoltIcon }, { name: 'Tool', component: WrenchIcon }, { name: 'Job', component: BriefcaseIcon }
    ]
  },
  { 
    id: 'social-connect',
    name: 'Social & Connect', 
    description: 'Interactions, sharing, and communication icons for modern social apps.',
    icon: HashtagIcon,
    count: 5,
    color: 'text-purple-500',
    icons: [
      { name: 'Chat', component: ChatBubbleLeftRightIcon }, { name: 'Heart', component: HeartIcon }, { name: 'Share', component: ShareIcon }, 
      { name: 'Send', component: PaperAirplaneIcon }, { name: 'Hashtag', component: HashtagIcon }
    ]
  },
  { 
    id: 'devices-iot',
    name: 'Devices & IoT', 
    description: 'Hardware, connectivity, and smart home status indicators.',
    icon: DevicePhoneMobileIcon,
    count: 6,
    color: 'text-blue-500',
    icons: [
      { name: 'Mobile', component: DevicePhoneMobileIcon }, { name: 'Desktop', component: ShieldCheckIcon }, 
      { name: 'Signal', component: SignalIcon }, { name: 'Wifi', component: WifiIcon }, { name: 'Battery', component: Battery50Icon }, 
      { name: 'Hardware', component: CpuChipIcon }
    ]
  },
  { 
    id: 'environment',
    name: 'Environment', 
    description: 'Weather patterns, seasonal changes, and ecological icons.',
    icon: CloudIcon,
    count: 4,
    color: 'text-sky-500',
    icons: [
      { name: 'Cloudy', component: CloudIcon }, { name: 'Sunny', component: SunIcon }, { name: 'Night', component: MoonIcon }, 
      { name: 'Globe', component: GlobeAltIcon }
    ]
  },
  { 
    id: 'security-privacy',
    name: 'Security & Privacy', 
    description: 'Encryption, verified statuses, and protection symbols.',
    icon: ShieldCheckIcon,
    count: 3,
    color: 'text-green-500',
    icons: [
      { name: 'Verified', component: ShieldCheckIcon }, { name: 'Fingerprint', component: FingerPrintIcon }, { name: 'Secure', component: LockClosedIcon }
    ]
  },
  { 
    id: 'performance',
    name: 'Performance', 
    description: 'Optimization, speed, and real-time activity indicators.',
    icon: BoltIcon,
    count: 3,
    color: 'text-amber-500',
    icons: [
      { name: 'Speed', component: BoltIcon }, { name: 'Core', component: CpuChipIcon }, { name: 'System', component: VariableIcon }
    ]
  },
  { 
    id: 'media-arts',
    name: 'Media & Arts', 
    description: 'Music, photography, video, and design tool icons.',
    icon: MusicalNoteIcon,
    count: 5,
    color: 'text-pink-500',
    icons: [
      { name: 'Music', component: MusicalNoteIcon }, { name: 'Paint', component: PaintBrushIcon }, { name: 'Photo', component: PhotoIcon }, 
      { name: 'Video', component: VideoCameraIcon }, { name: 'Audio', component: MicrophoneIcon }
    ]
  },
  { 
    id: 'commerce-finance',
    name: 'Commerce & Finance', 
    description: 'Banking, retail, and financial growth symbols.',
    icon: DollarSign,
    count: 20,
    color: 'text-indigo-600',
    icons: [
      { name: 'DollarSign', component: DollarSign }, { name: 'CreditCard', component: CreditCard }, { name: 'Banknote', component: Banknote }, 
      { name: 'Landmark', component: Landmark }, { name: 'TrendingUp', component: TrendingUp }, { name: 'Wallet', component: Wallet }, 
      { name: 'Recycle', component: Recycle }, { name: 'PiggyBank', component: PiggyBank }, { name: 'Coins', component: Coins }, 
      { name: 'Receipt', component: Receipt }, { name: 'ShoppingCart', component: ShoppingCart }, { name: 'BadgeDollarSign', component: BadgeDollarSign }, 
      { name: 'CircleDollarSign', component: CircleDollarSign }, { name: 'HandCoins', component: HandCoins }, { name: 'BaggageClaim', component: BaggageClaim }, 
      { name: 'BarChart', component: BarChart }, { name: 'Calculator', component: Calculator }, { name: 'Container', component: Container }, 
      { name: 'Package', component: Package }, { name: 'Factory', component: Factory }
    ]
  },
  { 
    id: 'nature-ecology',
    name: 'Nature & Ecology', 
    description: 'Organic forms, weather patterns, and ecological items.',
    icon: Trees,
    count: 20,
    color: 'text-emerald-500',
    icons: [
      { name: 'Trees', component: Trees }, { name: 'Flower', component: Flower }, { name: 'Leaf', component: Leaf }, 
      { name: 'Sprout', component: Sprout }, { name: 'SunMedium', component: SunMedium }, { name: 'CloudSun', component: CloudSun }, 
      { name: 'CloudRain', component: CloudRain }, { name: 'CloudLightning', component: CloudLightning }, { name: 'Wind', component: Wind }, 
      { name: 'Thermometer', component: Thermometer }, { name: 'Mountain', component: Mountain }, { name: 'Waves', component: Waves }, 
      { name: 'Sunset', component: Sunset }, { name: 'Sunrise', component: Sunrise }, { name: 'Rainbow', component: Rainbow }, 
      { name: 'Bird', component: Bird }, { name: 'Fish', component: Fish }, { name: 'Rabbit', component: Rabbit }, 
      { name: 'Footprints', component: Footprints }, { name: 'Bug', component: Bug }
    ]
  },
  { 
    id: 'travel-logistics',
    name: 'Travel & Logistics', 
    description: 'Global transport, navigation, and mapping tools.',
    icon: Plane,
    count: 20,
    color: 'text-blue-500',
    icons: [
      { name: 'Plane', component: Plane }, { name: 'Car', component: Car }, { name: 'Train', component: Train }, 
      { name: 'Ship', component: Ship }, { name: 'Map', component: Map }, { name: 'Compass2', component: Compass2 }, 
      { name: 'Luggage', component: Luggage }, { name: 'Hotel', component: Hotel }, { name: 'Locate', component: Locate }, 
      { name: 'Milestone', component: Milestone }, { name: 'Navigation', component: Navigation }, { name: 'ParkingCircle', component: ParkingCircle }, 
      { name: 'TramFront', component: TramFront }, { name: 'Bike', component: Bike }, { name: 'Truck', component: Truck }, 
      { name: 'Fuel', component: Fuel }, { name: 'Skull', component: Skull }, { name: 'Church', component: Church }, 
      { name: 'Castle', component: Castle }, { name: 'Globe2', component: Globe2 }
    ]
  },
  { 
    id: 'health-wellness',
    name: 'Health & Wellness', 
    description: 'Medical indicators, fitness, and vitality symbols.',
    icon: HeartPulse,
    count: 20,
    color: 'text-rose-600',
    icons: [
      { name: 'HeartPulse', component: HeartPulse }, { name: 'Stethoscope', component: Stethoscope }, { name: 'Activity2', component: Activity2 }, 
      { name: 'Dumbbell', component: Dumbbell }, { name: 'Apple', component: Apple }, { name: 'Pill', component: Pill }, 
      { name: 'Ambulance', component: Ambulance }, { name: 'Baby', component: Baby }, { name: 'Accessibility', component: Accessibility }, 
      { name: 'Bandage', component: Bandage }, { name: 'Bone', component: Bone }, { name: 'GlassWater', component: GlassWater }, 
      { name: 'Microscope', component: Microscope }, { name: 'Salad', component: Salad }, { name: 'Syringe', component: Syringe }, 
      { name: 'FlaskConical', component: FlaskConical }, { name: 'Accessibility2', component: Accessibility2 }, { name: 'Dna', component: Dna }, 
      { name: 'Brain', component: Brain }, { name: 'Bot', component: Bot }
    ]
  },
  { 
    id: 'science-innovation',
    name: 'Science & Innovation', 
    description: 'Laboratory research, innovation, and cosmic exploration.',
    icon: Atom2,
    count: 20,
    color: 'text-cyan-500',
    icons: [
      { name: 'Atom2', component: Atom2 }, { name: 'Microscope2', component: Microscope2 }, { name: 'Dna2', component: Dna2 }, 
      { name: 'TestTube', component: TestTube }, { name: 'Beaker', component: Beaker }, { name: 'Magnet', component: Magnet }, 
      { name: 'Orbit2', component: Orbit2 }, { name: 'Telescope2', component: Telescope2 }, { name: 'Zap2', component: Zap2 }, 
      { name: 'FlaskConical2', component: FlaskConical2 }, { name: 'FlaskRound', component: FlaskRound }, { name: 'Grid3X3', component: Grid3X3 }, 
      { name: 'LayoutGrid', component: LayoutGrid }, { name: 'Library', component: Library }, { name: 'Notebook', component: Notebook }, 
      { name: 'Rocket', component: Rocket }, { name: 'Search', component: Search }, { name: 'Shield2', component: Shield2 }, 
      { name: 'Waves2', component: Waves2 }, { name: 'Telescope', component: Telescope }
    ]
  },
  { 
    id: 'education-learning',
    name: 'Education & Learning', 
    description: 'Academic growth, tools, and achievement symbols.',
    icon: GraduationCap,
    count: 20,
    color: 'text-amber-600',
    icons: [
      { name: 'GraduationCap', component: GraduationCap }, { name: 'BookOpen', component: BookOpen }, { name: 'Pencil', component: Pencil }, 
      { name: 'Ruler', component: Ruler }, { name: 'School', component: School }, { name: 'Trophy', component: Trophy }, 
      { name: 'Shapes', component: Shapes }, { name: 'Eraser', component: Eraser }, { name: 'Clock', component: Clock }, 
      { name: 'PenTool', component: PenTool }, { name: 'Printer', component: Printer }, { name: 'Scissors', component: Scissors }, 
      { name: 'FileHeart', component: FileHeart }, { name: 'FileQuestion', component: FileQuestion }, { name: 'FileWarning', component: FileWarning }, 
      { name: 'FileSearch', component: FileSearch }, { name: 'FileBadge', component: FileBadge }, { name: 'FileJson', component: FileJson }, 
      { name: 'FileSignature', component: FileSignature }, { name: 'BookCopy', component: BookCopy }
    ]
  },
  { 
    id: 'gaming-play',
    name: 'Gaming & Play', 
    description: 'Interactive entertainment, social media, and play icons.',
    icon: Gamepad,
    count: 20,
    color: 'text-violet-500',
    icons: [
      { name: 'Gamepad', component: Gamepad }, { name: 'Joystick', component: Joystick }, { name: 'Gamepad2', component: Gamepad2 }, 
      { name: 'Target', component: Target }, { name: 'Ghost2', component: Ghost2 }, { name: 'Puzzle', component: Puzzle }, 
      { name: 'Share2', component: Share2 }, { name: 'PlayCircle', component: PlayCircle }, { name: 'Video2', component: Video2 }, 
      { name: 'Gamepad3', component: Gamepad3 }, { name: 'Mic2', component: Mic2 }, { name: 'Crown', component: Crown }, 
      { name: 'Sword', component: Sword }, { name: 'Spade', component: Spade }, { name: 'Club', component: Club }, 
      { name: 'Diamond', component: Diamond }, { name: 'Dice5', component: Dice5 }, { name: 'Medal', component: Medal }, 
      { name: 'Disc', component: Disc }, { name: 'PlayCircle2', component: PlayCircle2 }
    ]
  },
  { 
    id: 'kitchen-culinary',
    name: 'Kitchen & Culinary', 
    description: 'Dining, food production, and beverage indicators.',
    icon: Coffee,
    count: 20,
    color: 'text-orange-600',
    icons: [
      { name: 'Coffee', component: Coffee }, { name: 'Utensils', component: Utensils }, { name: 'Pizza', component: Pizza }, 
      { name: 'Soup', component: Soup }, { name: 'Beef', component: Beef }, { name: 'ChefHat', component: ChefHat }, 
      { name: 'Cookie', component: Cookie }, { name: 'Croissant', component: Croissant }, { name: 'CupSoda', component: CupSoda }, 
      { name: 'IceCream', component: IceCream }, { name: 'Milk', component: Milk }, { name: 'Refrigerator', component: Refrigerator }, 
      { name: 'Salad2', component: Salad2 }, { name: 'Sandwich', component: Sandwich }, { name: 'Wine', component: Wine }, 
      { name: 'Beer', component: Beer }, { name: 'Cake', component: Cake }, { name: 'Egg', component: Egg }, 
      { name: 'Martini', component: Martini }, { name: 'CupSoda', component: CupSoda }
    ]
  },
  { 
    id: 'home-lifestyle',
    name: 'Home & Lifestyle', 
    description: 'Living spaces, domestic items, and persona markers.',
    icon: Lamp,
    count: 20,
    color: 'text-slate-500',
    icons: [
      { name: 'Lamp', component: Lamp }, { name: 'Sofa', component: Sofa }, { name: 'Bed', component: Bed }, 
      { name: 'Tv2', component: Tv2 }, { name: 'Speaker2', component: Speaker2 }, { name: 'Home', component: Home }, 
      { name: 'Key', component: Key }, { name: 'DoorOpen', component: DoorOpen }, { name: 'Lightbulb', component: Lightbulb }, 
      { name: 'Camera2', component: Camera2 }, { name: 'Box', component: Box }, { name: 'Trash2', component: Trash2 }, 
      { name: 'Umbrella', component: Umbrella }, { name: 'Watch', component: Watch }, { name: 'Wrench', component: Wrench }, 
      { name: 'Search2', component: Search2 }, { name: 'Settings', component: Settings }, { name: 'User2', component: User2 }, 
      { name: 'Users2', component: Users2 }, { name: 'Contact', component: Contact }
    ]
  },
  { 
    id: 'tools-utility',
    name: 'Tools & Utility', 
    description: 'Industrial maintenance, construction, and utility items.',
    icon: Hammer,
    count: 20,
    color: 'text-zinc-600',
    icons: [
      { name: 'Hammer', component: Hammer }, { name: 'Wrench2', component: Wrench2 }, { name: 'Drill', component: Drill }, 
      { name: 'Pickaxe', component: Pickaxe }, { name: 'Nut', component: Nut }, { name: 'Axe', component: Axe }, 
      { name: 'Cigarette', component: Cigarette }, { name: 'Construction', component: Construction }, { name: 'Forklift', component: Forklift }, 
      { name: 'Grip', component: Grip }, { name: 'HardHat', component: HardHat }, { name: 'Pin', component: Pin }, 
      { name: 'Plug', component: Plug }, { name: 'Nut2', component: Nut2 }, { name: 'Table', component: Table }, 
      { name: 'Timer', component: Timer }, { name: 'ToyBrick', component: ToyBrick }, { name: 'UtilityPole', component: UtilityPole }, 
      { name: 'HardDrive2', component: HardDrive2 }, { name: 'Hammer', component: Hammer }
    ]
  }
];
