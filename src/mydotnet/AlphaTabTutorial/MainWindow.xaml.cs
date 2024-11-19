using System;
using System.ComponentModel;
using System.IO;
using System.Runtime.CompilerServices;
using System.Windows;
using AlphaTab;
using AlphaTab.Importer;
using AlphaTab.Model;
using AlphaTab.Synth;
using FontAwesome.Sharp;
using Microsoft.Win32;

namespace AlphaTabTutorial
{
    public partial class MainWindow : INotifyPropertyChanged
    {
        private Score _score;
        private Track _selectedTrack;

        public Score Score
        {
            get => _score;
            set
            {
                if (Equals(value, _score)) return;
                _score = value;
                OnPropertyChanged();
                SelectedTrack = _score.Tracks[0];
            }
        }
        public Track SelectedTrack
        {
            get => _selectedTrack;
            set
            {
                if (Equals(value, _selectedTrack)) return;
                _selectedTrack = value;
                OnPropertyChanged();
                AlphaTab.Tracks =
                [
                    value
                ];
                AlphaTab.RenderTracks();
            }
        }

        private Visibility _loadingIndicatorVisibility = Visibility.Collapsed;
        public Visibility LoadingIndicatorVisibility
        {
            get => _loadingIndicatorVisibility;
            set
            {
                if (value == _loadingIndicatorVisibility) return;
                _loadingIndicatorVisibility = value;
                OnPropertyChanged();
            }
        }

        private bool _isCountInActive;
        public bool IsCountInActive
        {
            get => _isCountInActive;
            set
            {
                if (value == _isCountInActive) return;
                _isCountInActive = value;
                OnPropertyChanged();
                if (AlphaTab.Api != null)
                {
                    AlphaTab.Api.CountInVolume = value ? 1 : 0;
                }
            }
        }

        private bool _isMetronomeActive;
        public bool IsMetronomeActive
        {
            get => _isMetronomeActive;
            set
            {
                if (value == _isMetronomeActive) return;
                _isMetronomeActive = value;
                OnPropertyChanged();
                if (AlphaTab.Api != null)
                {
                    AlphaTab.Api.MetronomeVolume = value ? 1 : 0;
                }
            }
        }

        public double[] ZoomLevels { get; } =
        [
            0.25,
            0.5,
            0.75,
            0.9,
            1.0,
            1.1,
            1.25,
            1.5,
            2
        ];

        private double _currentZoomLevel = 1.0;
        public double CurrentZoomLevel
        {
            get => _currentZoomLevel;
            set
            {
                if (value.Equals(_currentZoomLevel)) return;
                _currentZoomLevel = value;
                OnPropertyChanged();

                AlphaTab.Settings.Display.Scale = value;
                if (AlphaTab.Api != null)
                {
                    AlphaTab.Api.UpdateSettings();
                    AlphaTab.RenderTracks();
                }
            }
        }

        public LayoutMode[] LayoutModes { get; } =
        [
            LayoutMode.Page,
            LayoutMode.Horizontal
        ];

        private LayoutMode _currentLayoutMode;
        public LayoutMode CurrentLayoutMode
        {
            get => _currentLayoutMode;
            set
            {
                if (value == _currentLayoutMode) return;
                _currentLayoutMode = value;
                OnPropertyChanged();
                AlphaTab.Settings.Display.LayoutMode = value;
                if (AlphaTab.Api != null)
                {
                    AlphaTab.Api.UpdateSettings();
                    AlphaTab.RenderTracks();
                }
            }
        }

        private TimeSpan _currentTimePosition;
        public TimeSpan CurrentTimePosition
        {
            get => _currentTimePosition;
            set
            {
                if (value.Equals(_currentTimePosition)) return;
                _currentTimePosition = value;
                OnPropertyChanged();
            }
        }

        private TimeSpan _totalTimePosition;
        public TimeSpan TotalTimePosition
        {
            get => _totalTimePosition;
            set
            {
                if (value.Equals(_totalTimePosition)) return;
                _totalTimePosition = value;
                OnPropertyChanged();
            }
        }

        //public Player1()
        //{
        //    InitializeComponent();
        //    DataContext = this;
        //}
        public MainWindow()
        {
            InitializeComponent();
            DataContext = this;
            _score = new();
            _selectedTrack = new();
        }

        public bool IsPlayerReady => AlphaTab.Api?.IsReadyForPlayback ?? false;
        private void OnStopClicked(object sender, RoutedEventArgs e)
        {
            AlphaTab.Api.Stop();
        }

        private void OnPlayPauseClicked(object sender, RoutedEventArgs e)
        {
            AlphaTab.Api.PlayPause();
        }

        private void OnAlphaTabLoaded(object sender, RoutedEventArgs e)
        {
            AlphaTab.Api.PlayerStateChanged.On(pe =>
            {
                PlayPauseIcon.Icon = pe.State == PlayerState.Playing ? IconChar.Pause : IconChar.Play;
            });

            AlphaTab.Api.PlayerReady.On(() =>
            {
                OnPropertyChanged(nameof(IsPlayerReady));
            });

            AlphaTab.Api.RenderStarted.On(e =>
            {
                LoadingIndicatorVisibility = Visibility.Visible;
            });

            AlphaTab.Api.RenderFinished.On(e =>
            {
                LoadingIndicatorVisibility = Visibility.Collapsed;
            });

            var previousTime = -1;
            AlphaTab.Api.PlayerPositionChanged.On(pe =>
            {
                var currentSeconds = (int)(pe.CurrentTime / 1000);
                if (currentSeconds == previousTime)
                {
                    return;
                }
                previousTime = currentSeconds;

                CurrentTimePosition = TimeSpan.FromMilliseconds(pe.CurrentTime);
                TotalTimePosition = TimeSpan.FromMilliseconds(pe.EndTime);
            });
        }

        private void OnOpenClick(object sender, RoutedEventArgs e)
        {
            var dialog = new OpenFileDialog
            {
                Filter = "Supported Files (*.gp3, *.gp4, *.gp5, *.gpx, *.gp)|*.gp3;*.gp4;*.gp5;*.gpx;*.gp"
            };
            if (dialog.ShowDialog().GetValueOrDefault())
            {
                OpenFile(dialog.FileName);
            }
        }

        private void OpenFile(string fileName)
        {
            try
            {
                Score = ScoreLoader.LoadScoreFromBytes(File.ReadAllBytes(fileName));
            }
            catch (Exception e)
            {
                MessageBox.Show("Failed to open file: " + e.Message);
            }
        }

        public event PropertyChangedEventHandler? PropertyChanged;
        protected virtual void OnPropertyChanged([CallerMemberName] string? propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
