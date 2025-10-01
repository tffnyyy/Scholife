document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const organizations = [
        {
            id: 'test',
            name: "TEST",
            shortDesc: "Software & Innovation",
            longDesc: "We build innovative software solutions for a modern world.",
            logo: "https://via.placeholder.com/150/DC143C/ffffff?text=TEST",
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
            logo: "https://via.placeholder.com/150/FFD700/000000?text=HM",
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
            logo: "https://via.placeholder.com/150/000000/FFD700?text=CDS",
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
        },
        {
            id: 'student-council',
            name: "Student Council",
            shortDesc: "Student Government",
            longDesc: "Representing student voices and organizing campus-wide events and initiatives.",
            logo: "https://via.placeholder.com/150/DC143C/ffffff?text=SC",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            },
            posts: []
        },
        {
            id: 'sports-club',
            name: "Sports Club",
            shortDesc: "Athletics & Recreation",
            longDesc: "Promoting physical fitness and competitive sports among students.",
            logo: "https://via.placeholder.com/150/FFD700/000000?text=SPORT",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            },
            posts: []
        },
        {
            id: 'music-society',
            name: "Music Society",
            shortDesc: "Musical Arts",
            longDesc: "Fostering musical talent and organizing concerts and performances.",
            logo: "https://via.placeholder.com/150/000000/FFD700?text=MUSIC",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#",
                linkedin: "#"
            },
            posts: []
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

    // Initialize the application
    init();

    function init() {
        setupNavigation();
        setupResponsiveNavigation();
        renderAnnouncements();
        renderLostFoundItems();
        renderOrganizations();
        setupEventModal();
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
                'high': '#DC143C',
                'medium': '#FFD700',
                'low': '#000000'
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
                <div class="post-item-form" style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(220, 20, 60, 0.1); border-left: 5px solid #DC143C;">
                    <h3 style="color: #000000; margin-bottom: 20px;">Post Lost/Found Item</h3>
                    <form>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; color: #000000; font-weight: 500;">Type:</label>
                            <select style="width: 100%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 8px; color: #000000;">
                                <option value="lost">Lost Item</option>
                                <option value="found">Found Item</option>
                            </select>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; color: #000000; font-weight: 500;">Title:</label>
                            <input type="text" placeholder="Item title..." style="width: 100%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 8px; color: #000000;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; color: #000000; font-weight: 500;">Description:</label>
                            <textarea placeholder="Detailed description..." style="width: 100%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 8px; height: 100px; color: #000000;"></textarea>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; color: #000000; font-weight: 500;">Location:</label>
                            <input type="text" placeholder="Where was it lost/found?" style="width: 100%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 8px; color: #000000;">
                        </div>
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 5px; color: #000000; font-weight: 500;">Contact:</label>
                            <input type="email" placeholder="Your email..." style="width: 100%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 8px; color: #000000;">
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

    // Render organizations with circular layout
    function renderOrganizations() {
        const container = document.getElementById('organizations-container');
        if (!container) return;

        container.innerHTML = '';

        organizations.forEach(org => {
            const card = document.createElement('div');
            card.className = 'organization-card';
            card.addEventListener('click', () => showOrganizationFeed(org));

            card.innerHTML = `
                <div class="organization-logo">
                    <img src="${org.logo}" alt="${org.name} Logo" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
                </div>
                <div class="organization-name">${org.name}</div>
                <div class="hover-popup">
                    <h4>${org.name}</h4>
                    <p><strong>${org.shortDesc}</strong></p>
                    <p>${org.longDesc}</p>
                    <div class="social-icons">
                        <a href="${org.social.twitter}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-twitter"></i></a>
                        <a href="${org.social.facebook}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-facebook-f"></i></a>
                        <a href="${org.social.instagram}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-instagram"></i></a>
                        <a href="${org.social.linkedin}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-linkedin-in"></i></a>
                    </div>
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
                <h2 style="color: #000000; margin: 0 0 5px 0;">${org.name}</h2>
                <p style="color: #666666; margin: 0;">${org.longDesc}</p>
            </div>
        `;

        // Clear and populate posts
        postsContainer.innerHTML = '';

        if (org.posts.length === 0) {
            postsContainer.innerHTML = `
                <div style="background: white; padding: 40px; border-radius: 15px; text-align: center; box-shadow: 0 4px 15px rgba(220, 20, 60, 0.1); border-left: 5px solid #DC143C;">
                    <h3 style="color: #666666; margin-bottom: 10px;">No posts available</h3>
                    <p style="color: #999999;">This organization hasn't posted any content yet. Check back later!</p>
                </div>
            `;
        } else {
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
        }

        // Show the feed page
        showPage('org-feed');

        // Setup back button
        document.getElementById('back-to-orgs').addEventListener('click', () => {
            showPage('organizations');
        });
    }

    // Modal functionality
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
