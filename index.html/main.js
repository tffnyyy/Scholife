document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const organizations = [
        {
            id: 'test',
            name: "TEST",
            shortDesc: "Software & Innovation",
            longDesc: "We build innovative software solutions for a modern world.",
            logo: "https://via.placeholder.com/90/3498db/ffffff?text=TS",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            },
            posts: [
                {
                    id: 1,
                    category: 'academic',
                    title: 'Tech Innovation Workshop',
                    description: 'Join us for an exciting workshop on emerging technologies and software development practices.',
                    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop',
                    date: '2025-01-15',
                    time: '09:00 AM - 03:00 PM',
                    location: 'Tech Lab A'
                },
                {
                    id: 2,
                    category: 'community',
                    title: 'Open Source Contribution Drive',
                    description: 'Learn how to contribute to open source projects and make a difference in the tech community.',
                    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=200&fit=crop',
                    date: '2025-01-20',
                    time: '02:00 PM - 05:00 PM',
                    location: 'Computer Lab'
                }
            ]
        },
        {
            id: 'health-matters',
            name: "Health Matters NGO",
            shortDesc: "Community Wellness",
            longDesc: "Dedicated to promoting public health and well-being.",
            logo: "https://via.placeholder.com/90/2ecc71/ffffff?text=HM",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            },
            posts: [
                {
                    id: 1,
                    category: 'community',
                    title: 'Health Awareness Campaign',
                    description: 'Community health screening and awareness program for students and faculty.',
                    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop',
                    date: '2025-01-18',
                    time: '08:00 AM - 12:00 PM',
                    location: 'Main Campus'
                },
                {
                    id: 2,
                    category: 'academic',
                    title: 'Mental Health Workshop',
                    description: 'Understanding and managing stress, anxiety, and mental health in academic environments.',
                    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
                    date: '2025-01-25',
                    time: '02:00 PM - 04:00 PM',
                    location: 'Student Center'
                }
            ]
        },
        {
            id: 'creative-design',
            name: "Creative Design Studio",
            shortDesc: "Graphic & Web Design",
            longDesc: "Crafting stunning visual identities and user experiences.",
            logo: "https://via.placeholder.com/90/f39c12/ffffff?text=DS",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            },
            posts: [
                {
                    id: 1,
                    category: 'arts',
                    title: 'Design Showcase Exhibition',
                    description: 'Displaying the best creative works from our members including digital art, UI/UX designs, and branding projects.',
                    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=200&fit=crop',
                    date: '2025-02-01',
                    time: '10:00 AM - 06:00 PM',
                    location: 'Art Gallery'
                }
            ]
        }
    ];

    const members = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "President",
            type: "officers",
            yearLevel: "4th Year",
            age: 21,
            contact: "+1 (555) 123-4567",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Vice President",
            type: "officers",
            yearLevel: "3rd Year",
            age: 20,
            contact: "+1 (555) 234-5678",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            position: "Secretary",
            type: "officers",
            yearLevel: "3rd Year",
            age: 20,
            contact: "+1 (555) 345-6789",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 4,
            name: "David Kim",
            position: "Treasurer",
            type: "officers",
            yearLevel: "4th Year",
            age: 22,
            contact: "+1 (555) 456-7890",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 5,
            name: "Jessica Wang",
            position: "Member",
            type: "members",
            yearLevel: "2nd Year",
            age: 19,
            contact: "+1 (555) 567-8901",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 6,
            name: "Alex Thompson",
            position: "Member",
            type: "members",
            yearLevel: "1st Year",
            age: 18,
            contact: "+1 (555) 678-9012",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        }
    ];

    const announcements = [
        {
            id: 1,
            title: "New Semester Orientation",
            content: "Welcome to the new academic semester! Join us for orientation sessions covering academic policies, student services, and campus resources.",
            date: "2025-01-10",
            organization: "Academic Affairs",
            priority: "high"
        },
        {
            id: 2,
            title: "Student Elections 2025",
            content: "Student Government elections are now open. Vote for your representatives and make your voice heard in campus governance.",
            date: "2025-01-15",
            organization: "Student Government",
            priority: "medium"
        },
        {
            id: 3,
            title: "Career Fair Registration",
            content: "Register now for the Annual Career Fair featuring top employers from various industries. Network and explore internship opportunities.",
            date: "2025-01-20",
            organization: "Career Services",
            priority: "high"
        },
        {
            id: 4,
            title: "Library Extended Hours",
            content: "The main library will extend its hours during exam period. Study spaces and resources will be available 24/7 starting next week.",
            date: "2025-01-12",
            organization: "Library Services",
            priority: "low"
        }
    ];

    const lostFoundItems = [
        {
            id: 1,
            type: "lost",
            title: "Blue Backpack",
            description: "Navy blue JanSport backpack with laptop and textbooks. Lost near the engineering building.",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
            date: "2025-01-08",
            location: "Engineering Building",
            contact: "student@email.com"
        },
        {
            id: 2,
            type: "found",
            title: "iPhone 12",
            description: "Black iPhone 12 with blue case found in the cafeteria. Contact to identify and claim.",
            image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop",
            date: "2025-01-09",
            location: "Main Cafeteria",
            contact: "security@campus.edu"
        },
        {
            id: 3,
            type: "lost",
            title: "Calculator",
            description: "TI-84 Plus graphing calculator in black case. Needed for upcoming exams.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
            date: "2025-01-07",
            location: "Math Building",
            contact: "mathstudent@email.com"
        },
        {
            id: 4,
            type: "found",
            title: "House Keys",
            description: "Set of keys with a blue keychain found in the parking lot near the gym.",
            image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=300&h=200&fit=crop",
            date: "2025-01-06",
            location: "Gym Parking Lot",
            contact: "security@campus.edu"
        }
    ];

    // Calendar data
    let currentDate = new Date();
    const events = [
        {
            id: 1,
            title: "Tech Innovation Workshop",
            date: "2025-01-15",
            time: "09:00 AM",
            organization: "TEST",
            category: "academic"
        },
        {
            id: 2,
            title: "Health Awareness Campaign",
            date: "2025-01-18",
            time: "08:00 AM",
            organization: "Health Matters NGO",
            category: "community"
        },
        {
            id: 3,
            title: "Student Elections",
            date: "2025-01-15",
            time: "10:00 AM",
            organization: "Student Government",
            category: "community"
        },
        {
            id: 4,
            title: "Career Fair",
            date: "2025-01-20",
            time: "09:00 AM",
            organization: "Career Services",
            category: "academic"
        },
        {
            id: 5,
            title: "Design Showcase",
            date: "2025-02-01",
            time: "10:00 AM",
            organization: "Creative Design Studio",
            category: "arts"
        }
    ];

    // Initialize the application
    init();

    function init() {
        setupNavigation();
        setupResponsiveNavigation();
        renderAnnouncements();
        renderLostFoundItems();
        renderOrganizations();
        renderMembersProfiles();
        setupMemberModal();
        setupEventModal();
        setupCalendar();
        setupLostFoundTabs();
    }

    // Navigation setup
    function setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link[data-page]');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.getAttribute('data-page');
                showPage(targetPage);

                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Close mobile nav if open
                document.getElementById('sidebar').classList.remove('open');
            });
        });
    }

    function showPage(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        const targetPage = document.getElementById(`${pageId}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    }

    // Responsive navigation
    function setupResponsiveNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const sidebar = document.getElementById('sidebar');

        navToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !navToggle.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }

    // Render announcements
    function renderAnnouncements() {
        const container = document.getElementById('announcements-container');
        if (!container) return;

        container.innerHTML = '';

        announcements.forEach(announcement => {
            const card = document.createElement('div');
            card.className = 'announcement-card';

            const priorityColor = {
                'high': '#e74c3c',
                'medium': '#f39c12',
                'low': '#3498db'
            };

            card.innerHTML = `
                <div class="announcement-header">
                    <div class="announcement-icon" style="background: ${priorityColor[announcement.priority]}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                            <path d="M3 11l18-5v12L3 14v-3z"></path>
                            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                        </svg>
                    </div>
                    <div>
                        <div class="announcement-meta">
                            <span>${announcement.organization}</span>
                            <span>${formatDate(announcement.date)}</span>
                        </div>
                    </div>
                </div>
                <h3 class="announcement-title">${announcement.title}</h3>
                <p class="announcement-content">${announcement.content}</p>
                <div class="announcement-actions">
                    <button class="action-btn primary-btn">Read More</button>
                    <button class="action-btn secondary-btn">Share</button>
                </div>
            `;

            container.appendChild(card);
        });
    }

    // Lost & Found functionality
    function setupLostFoundTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');

                // Update active tab
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter and display items
                filterLostFoundItems(tab);
            });
        });
    }

    function renderLostFoundItems() {
        filterLostFoundItems('lost'); // Start with lost items
    }

    function filterLostFoundItems(filter) {
        const container = document.getElementById('lost-found-container');
        if (!container) return;

        container.innerHTML = '';

        let itemsToShow = lostFoundItems;

        if (filter === 'lost') {
            itemsToShow = lostFoundItems.filter(item => item.type === 'lost');
        } else if (filter === 'found') {
            itemsToShow = lostFoundItems.filter(item => item.type === 'found');
        } else if (filter === 'post') {
            // Show post form
            container.innerHTML = `
                <div class="post-item-form">
                    <h3>Post Lost/Found Item</h3>
                    <form>
                        <div style="margin-bottom: 15px;">
                            <label>Type:</label>
                            <select style="width: 100%; padding: 8px; margin-top: 5px;">
                                <option value="lost">Lost Item</option>
                                <option value="found">Found Item</option>
                            </select>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label>Title:</label>
                            <input type="text" placeholder="Item title..." style="width: 100%; padding: 8px; margin-top: 5px;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label>Description:</label>
                            <textarea placeholder="Detailed description..." style="width: 100%; padding: 8px; margin-top: 5px; height: 100px;"></textarea>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label>Location:</label>
                            <input type="text" placeholder="Where was it lost/found?" style="width: 100%; padding: 8px; margin-top: 5px;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label>Contact:</label>
                            <input type="email" placeholder="Your email..." style="width: 100%; padding: 8px; margin-top: 5px;">
                        </div>
                        <button type="submit" class="action-btn primary-btn">Post Item</button>
                    </form>
                </div>
            `;
            return;
        }

        itemsToShow.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = `lost-found-item ${item.type}`;

            itemCard.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="item-image">
                <h3 class="item-title">${item.title}</h3>
                <p class="item-description">${item.description}</p>
                <div class="item-meta">
                    <span>${item.location}</span>
                    <span>${formatDate(item.date)}</span>
                </div>
                <div style="margin-top: 15px;">
                    <button class="action-btn primary-btn">Contact</button>
                </div>
            `;

            container.appendChild(itemCard);
        });
    }

    // Render organizations
    function renderOrganizations() {
        const container = document.getElementById('organizations-container');
        if (!container) return;

        container.innerHTML = '';

        organizations.forEach(org => {
            const card = document.createElement('div');
            card.className = 'organization-card';
            card.addEventListener('click', () => showOrganizationFeed(org));

            card.innerHTML = `
                <img src="${org.logo}" alt="${org.name} Logo" class="organization-logo">
                <div class="organization-info">
                    <h3>${org.name}</h3>
                    <p class="short-desc">${org.shortDesc}</p>
                    <hr>
                    <div class="social-icons">
                        <a href="${org.social.twitter}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-twitter"></i></a>
                        <a href="${org.social.facebook}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-facebook-f"></i></a>
                        <a href="${org.social.instagram}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-instagram"></i></a>
                        <a href="${org.social.linkedin}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="hover-popup">
                    <h4>${org.name}</h4>
                    <p>${org.longDesc}</p>
                </div>
            `;

            container.appendChild(card);
        });
    }

    // Show organization feed
    function showOrganizationFeed(org) {
        const orgHeader = document.getElementById('org-header');
        const postsContainer = document.getElementById('posts-container');

        // Update organization header
        orgHeader.innerHTML = `
            <img src="${org.logo}" alt="${org.name} Logo">
            <div>
                <h2>${org.name}</h2>
                <p>${org.longDesc}</p>
            </div>
        `;

        // Clear and populate posts
        postsContainer.innerHTML = '';

        org.posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card';

            postCard.innerHTML = `
                <div class="post-header ${post.category}">
                    <div class="post-category ${post.category}">${post.category.toUpperCase()}</div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-description">${post.description}</p>
                    <div class="post-meta">
                        <div style="display: flex; align-items: center; gap: 5px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            ${formatDate(post.date)}
                        </div>
                        <div style="display: flex; align-items: center; gap: 5px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12,6 12,12 16,14"></polyline>
                            </svg>
                            ${post.time}
                        </div>
                        <div style="display: flex; align-items: center; gap: 5px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            ${post.location}
                        </div>
                    </div>
                </div>
                <img src="${post.image}" alt="${post.title}" class="post-image">
                <div class="post-actions">
                    <button class="see-more-btn" onclick="showPostDetails(${post.id}, '${org.id}')">See More</button>
                    <button class="add-calendar-btn" onclick="addToCalendar('${post.title}', '${post.date}', '${post.time}')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px; margin-right: 5px;">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        Add to Calendar
                    </button>
                </div>
            `;

            postsContainer.appendChild(postCard);
        });

        // Show the feed page
        showPage('org-feed');

        // Setup back button
        document.getElementById('back-to-orgs').addEventListener('click', () => {
            showPage('organizations');
        });
    }

    // Members profiles in right sidebar
    function renderMembersProfiles() {
        const container = document.getElementById('members-profiles');
        if (!container) return;

        container.innerHTML = '';

        members.forEach(member => {
            const profileDiv = document.createElement('div');
            profileDiv.className = 'member-profile';

            profileDiv.innerHTML = `
                <img src="${member.avatar}" alt="${member.name}" class="member-profile-avatar">
                <div class="member-profile-info">
                    <div class="member-profile-name">${member.name}</div>
                    <div class="member-profile-position">${member.position}</div>
                </div>
                <div class="member-profile-details">
                    <div class="member-detail-item">
                        <span class="member-detail-label">Year:</span>
                        <span class="member-detail-value">${member.yearLevel}</span>
                    </div>
                    <div class="member-detail-item">
                        <span class="member-detail-label">Age:</span>
                        <span class="member-detail-value">${member.age}</span>
                    </div>
                    <div class="member-detail-item">
                        <span class="member-detail-label">Contact:</span>
                        <span class="member-detail-value">${member.contact}</span>
                    </div>
                </div>
            `;

            profileDiv.addEventListener('click', () => {
                const details = profileDiv.querySelector('.member-profile-details');
                const isExpanded = profileDiv.classList.contains('expanded');

                // Close all other expanded profiles
                container.querySelectorAll('.member-profile').forEach(p => {
                    p.classList.remove('expanded');
                    p.querySelector('.member-profile-details').classList.remove('show');
                });

                if (!isExpanded) {
                    profileDiv.classList.add('expanded');
                    details.classList.add('show');
                }
            });

            container.appendChild(profileDiv);
        });
    }

    // Calendar functionality
    function setupCalendar() {
        const calendarGrid = document.getElementById('calendar-grid');
        const monthYearElement = document.getElementById('calendar-month-year');
        const prevBtn = document.getElementById('prev-month');
        const nextBtn = document.getElementById('next-month');

        if (!calendarGrid) return;

        prevBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        nextBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });

        renderCalendar();
        renderUpcomingEvents();

        function renderCalendar() {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();

            monthYearElement.textContent = new Date(year, month).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
            });

            calendarGrid.innerHTML = '';

            // Add day headers
            const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            dayHeaders.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-header-day';
                dayElement.textContent = day;
                calendarGrid.appendChild(dayElement);
            });

            // Calculate first day and days in month
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const today = new Date();

            // Add empty cells for previous month days
            for (let i = 0; i < firstDay; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'calendar-day other-month';
                calendarGrid.appendChild(emptyDay);
            }

            // Add days of current month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                dayElement.textContent = day;

                const currentDay = new Date(year, month, day);
                const dateString = currentDay.toISOString().split('T')[0];

                // Check if today
                if (currentDay.toDateString() === today.toDateString()) {
                    dayElement.classList.add('today');
                }

                // Check if has events
                const hasEvent = events.some(event => event.date === dateString);
                if (hasEvent) {
                    dayElement.classList.add('has-event');
                    dayElement.addEventListener('click', () => {
                        const dayEvents = events.filter(event => event.date === dateString);
                        showEventDetails(dayEvents[0]); // Show first event for simplicity
                    });
                }

                calendarGrid.appendChild(dayElement);
            }
        }

        function renderUpcomingEvents() {
            const upcomingContainer = document.getElementById('upcoming-events');
            if (!upcomingContainer) return;

            const nextWeekEvents = events
                .filter(event => {
                    const eventDate = new Date(event.date);
                    const today = new Date();
                    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
                    return eventDate >= today && eventDate <= nextWeek;
                })
                .sort((a, b) => new Date(a.date) - new Date(b.date));

            upcomingContainer.innerHTML = '';

            nextWeekEvents.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'event-item';
                eventElement.innerHTML = `
                    <div class="event-title">${event.title}</div>
                    <div class="event-time">${formatDate(event.date)} at ${event.time}</div>
                `;

                eventElement.addEventListener('click', () => showEventDetails(event));
                upcomingContainer.appendChild(eventElement);
            });

            if (nextWeekEvents.length === 0) {
                upcomingContainer.innerHTML = '<p style="color: #7f8c8d; text-align: center;">No upcoming events</p>';
            }
        }
    }

    // Modal functionality
    function setupMemberModal() {
        const modal = document.getElementById('member-modal');
        const closeBtn = modal.querySelector('.close');

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    function setupEventModal() {
        const modal = document.getElementById('event-modal');
        const closeBtn = modal.querySelector('.close');

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    function showEventDetails(event) {
        const modal = document.getElementById('event-modal');
        const detailsContainer = document.getElementById('event-details');

        detailsContainer.innerHTML = `
            <h2>${event.title}</h2>
            <div style="margin: 20px 0;">
                <p><strong>Date:</strong> ${formatDate(event.date)}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Organization:</strong> ${event.organization}</p>
                <p><strong>Category:</strong> ${event.category}</p>
            </div>
            <div style="margin-top: 20px;">
                <button class="action-btn primary-btn" onclick="addToCalendar('${event.title}', '${event.date}', '${event.time}')">Add to Calendar</button>
                <button class="action-btn secondary-btn">Share Event</button>
            </div>
        `;

        modal.classList.add('active');
    }

    // Utility functions
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    // Global functions for event handlers
    window.showPostDetails = function(postId, orgId) {
        alert(`Post details for post ${postId} from organization ${orgId} - Full post view would open here!`);
    };

    window.addToCalendar = function(title, date, time) {
        const startDate = new Date(`${date} ${time}`);
        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour later

        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;

        window.open(calendarUrl, '_blank');
    };
});
